import {PageWrapper} from "@/components/wrapper/page-wrapper";
import {ThunderboltOutlined} from "@ant-design/icons";
import Head from "next/head";
import ButtonIcon from "@/components/button/button-icon";
import router from "next/router";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Lingua French</title>
            </Head>
            <PageWrapper>
                <div className="flex flex-col justify-center items-center h-full pt-64">
                    <div>
                        <p className="font-extrabold text-4xl">Lingua French</p>
                        <p className="text-center">The Easy Way to French.</p>
                    </div>
                    <ButtonIcon
                        title={"GO!"}
                        icon={<ThunderboltOutlined />}
                        onClick={() => router.push("/learn")}
                    />
                </div>
            </PageWrapper>
        </>
    );
}
