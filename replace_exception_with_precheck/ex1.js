class ResourcePool {
  get() {
    let result;
    try {
      result = available.pop();
      allocated.add(result);
    } catch (e) {
      result = Resource.create();
      allocated.add(result);
    }

    return result;
  }
}
