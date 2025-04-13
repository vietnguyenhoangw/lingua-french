import router from "next/router";

export default function LearnHeader() {
    return (
        <>
            <div className="flex flex-col" onClick={() => router.push("/")}>
                <div>
                    <p className="font-extrabold text-4xl">Lingua French</p>
                    <p>The Easy Way to French.</p>
                </div>
            </div>
        </>
    );
}
