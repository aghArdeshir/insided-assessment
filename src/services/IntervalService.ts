const ONE_SECOND = 1000;

/**
 * This service is meant to run only one `setInterval` to call too many
 * callbacks. The use case is that each commit needs a one second interval to
 * update the human readable date displayed. Instead of running too many
 * setIntervals, this runs a setInterval only once
 */
class IntervalService {
  callbacks: (() => void)[] = [];
  intervalRef: null | NodeJS.Timer = null;
  intervalDuration: number;

  constructor(intervalDuration: number) {
    this.intervalDuration = intervalDuration;
  }

  initTimer() {
    if (!this.intervalRef) {
      this.intervalRef = setInterval(() => {
        if (!this.callbacks.length && this.intervalRef) {
          this.stopTimer();
          return;
        }

        this.callbacks.forEach((callback) => {
          callback();
        });
      }, this.intervalDuration);
    }
  }

  stopTimer() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
      this.intervalRef = null;
    }
  }

  addCallback(callback: () => void) {
    this.callbacks.push(callback);
    this.initTimer();
  }

  removeCallback(callback: () => void) {
    const callbackIndex = this.callbacks.indexOf(callback);
    this.callbacks.splice(callbackIndex, 1);

    if (!this.callbacks.length) {
      this.stopTimer();
    }
  }
}

export const intervalService = new IntervalService(ONE_SECOND);
