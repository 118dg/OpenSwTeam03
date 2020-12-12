import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Release = () => {
    const [release, setRelease] = useState("");
    const [releases, setReleases] = useState([]);
    const getReleases = async() => {
        const dbReleases = await dbService.collection("releases").get();
        dbReleases.forEach((document) => {
            const releaseObject = {
                ...document.data(),
                id: document.id,
            };
            setReleases((prev) => [releaseObject, ...prev]);
        });
    };
    useEffect(() => {
        getReleases();
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("release").add({
            release,
            createdAt: Date.now()
        });
        setRelease("");
    };
const onChange = (event)=>{
    const {target:{value}} = event;
    setRelease(value);
};

console.log(releases);

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value={release} onChange={onChange} type="text" placeholder="리뷰를 남겨주세요!" maxLength={300} />
                <input type="submit" value="저장" />
            </form>
            <div>
                {releases.map((release) => (
                    <div key={release.id}>
                        <h4>{release.release}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Release;
