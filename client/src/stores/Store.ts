import { observable } from "mobx";

type StoreType = {
  sampleNumber: number;
};

const Store: StoreType = observable({
  sampleNumber: 0,
  increase() {
    this.sampleNumber++;
  },
});

export default Store;
