class ResourcePool {
  get() {
    let result;

    if (available.isEmpty()) {
      result = Resource.create();
      allocated.add(result);
    } else {
      try {
        result = available.pop();
        allocated.add(result);
      } catch (e) {
        throw new Error("unreachable!");
      }
    }

    return result;
  }
}
