export const topToBottomAnimations = {
  hidden: {
    opacity: 0,
    y: -200,
    transition: {
      duration: 0.5
    }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
};
export const bottomToTopAnimations = {
  hidden: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 0.5
    }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
};
export const leftToRightAnimations = {
  hidden: {
    opacity: 0,
    x: -200
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1
    }
  }
};
export const rightToLeftAnimations = {
  hidden: {
    opacity: 0,
    x: 200
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1
    }
  }
};
