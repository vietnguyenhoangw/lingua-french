import LottieAnimation from "@/components/lottie/lottie-animation";
import { MyLottie } from "public/public";

interface ILearnResultProps {
    total?: number;
    correct?: number;
}

export default function LearnResult({
    total = 0,
    correct = 0,
}: ILearnResultProps) {
    const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

    return (
        <div className="flex flex-col text-center items-center">
            <LottieAnimation lottieJson={MyLottie.finish} size={250} />

            <div>
                <p className="font-extrabold text-2xl">Session Complete!</p>
                <p className="text-lg">
                    You&apos;ve matched <span className="font-semibold">{correct}</span> out of{" "}
                    <span className="font-semibold">{total}</span> correctly.({percent}%)
                </p>
                <p className="mt-2">
                    {percent === 100
                        ? "Perfect! You're a matching master! 🚀"
                        : "Keep practicing to improve even more — you're doing awesome!"}
                </p>
            </div>
        </div>
    );
}
