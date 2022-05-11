public static void main(String[] args) {
    try {
        System.out.println(run(args))
    } catch(Exception e) {
        System.out.println("Exception: " + e);
        System.exit(1);
    }
}

static void run(String[] args) throws IOException {
    return countOrders(parseCommandLine(args));
}

private static CommandLine parseCommandLine(String[] args) {
    if (args.length == 0) throw new RuntimeException("No input file specified");
    CommandLine result = new CommandLine()
    result.onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg))
    result.filename = args[args.length -1]; 
    return result 
}

private static long countOrders(CommandLine commandLine) throws IOException {
    File input = Paths.get(filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (commandLine.onlyCountReady) {
        return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
    } else {
        return orders.length
    }
}

private static class CommandLine {
    boolean onlyCountReady
}