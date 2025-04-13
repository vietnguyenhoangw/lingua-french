import type {NextConfig} from "next";
import withTM from "next-transpile-modules";

const withTranspile = withTM(["antd", "rc-util", "rc-motion"]);

const nextConfig: NextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default withTranspile(nextConfig);
