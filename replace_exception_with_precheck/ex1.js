class ResourcePool {
  get() {
    const result = available.isEmpty() ? Resource.create() : available.pop();
    allocated.add(result);
    return result;
  }
}
