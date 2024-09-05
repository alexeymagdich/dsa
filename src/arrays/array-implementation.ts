class MyArray<T> {
  private length: number;
  private data: Record<number, T>;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number) {
    return this.data[index];
  }

  push(item: T) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  delete(index: number) {
    const newData = Object.values(this.data).reduce((newData, _currentValue, currentIndex) => {
      if (currentIndex === index) {
        return newData;
      }

      const indexToInsert = currentIndex > index ? currentIndex - 1 : currentIndex;
      newData[indexToInsert] = this.data[currentIndex];

      return newData;
    }, {});

    this.length--;
    this.data = newData;
  }
}

export function run_arrayImplementation() {
  const arr = new MyArray<number>();

  arr.push(2);
  arr.push(3);
  arr.push(4);
  arr.delete(1);
  arr.push(10);
  arr.push(11);
  arr.delete(2);

  console.log(arr);
}
