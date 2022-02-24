interface RequireContext {
    keys(): string[];
    <T>(id: string): T;
}

const requireAll = (requireContext: RequireContext) => requireContext.keys()
    .map(requireContext);

const req = require.context('./assets/images', false, /\.svg$/);
requireAll(req);
