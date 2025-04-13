import React, {Fragment} from "react";
import Layout from "../layout/layout";
import Background from "../background/background";
import {IPageWrapper} from "./page-wrapper.type";

export const PageWrapper = ({children, isDisableBg = false}: IPageWrapper) => {
    return (
        <Fragment>
            {!isDisableBg && <Background />}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                }}>
                <Layout>{children}</Layout>
            </div>
        </Fragment>
    );
};
