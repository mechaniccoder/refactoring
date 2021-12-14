class ResourcePool {
  get() {
    let result;

    if (available.isEmpty()) {
      result = Resource.create();
      allocated.add(result);
    } else {
      result = available.pop();
      allocated.add(result);
    }

    return result;
  }
}
