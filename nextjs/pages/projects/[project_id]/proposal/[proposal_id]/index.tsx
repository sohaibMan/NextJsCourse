//todo add this page

import {useRouter} from "next/router";
import * as React from "react";

export default function Proposal() {

    const router = useRouter();
    const {proposal_id} = router.query;
    if (!proposal_id) return (<></>)
    return <h1>proposal n {proposal_id.toString()} </h1>
}