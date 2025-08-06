import extend from 'extend';

type CustomObject = {
  mine?: () => void;
  yours?: () => void;
};

const obj: CustomObject = {
  mine: () => {
    console.log('mine');
  },
};

const obj2: CustomObject = {
  yours: () => {
    console.log('yours');
  },
};

extend(obj, obj2);

obj.mine?.();
obj.yours?.();
