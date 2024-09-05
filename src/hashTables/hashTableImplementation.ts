class HashTable {
  private readonly data: unknown[][][];

  constructor(size: number) {
    this.data = new Array(size);
  }

  set<T>(key: string, value: T) {
    const address = this.hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
  }

  get(key: string) {
    const address = this.hash(key);
    const data = this.data[address];

    const found = data?.find((el) => el[0] === key);
    if (!found) {
      return null;
    }

    return found[1];
  }

  keys() {
    return this.data.flatMap((x) => x.map((y) => y[0]));
  }

  private hash(key: string) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }
}

export function hashTableImplementation() {
  const hashTable = new HashTable(10);

  hashTable.set('username', 'Alex');
  hashTable.set('password', '$$$xyz123');
  hashTable.set('age', 42);

  const username = hashTable.get('username');
  const password = hashTable.get('password');
  const age = hashTable.get('age');
  const qwe = hashTable.get('qwe');

  console.log({
    username,
    password,
    age,
    qwe,
  });

  const keys = hashTable.keys();

  console.log(keys);
  console.log(hashTable);
}
