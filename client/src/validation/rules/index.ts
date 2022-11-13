export const userRules = {
  name: {
    min: 1,
    max: 100,
  },
  password: {
    min: 8,
    max: 100,
  },
};

export const messageRules = {
  content: {
    min: 1,
    max: 500,
  },
};

export const roomRules = {
  title: {
    min: 1,
    max: 100,
  },
  description: {
    min: 1,
    max: 100,
  },
};
