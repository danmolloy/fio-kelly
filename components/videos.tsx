import IndexSection from "./indexSection";
import VideoDiv from "./videoDiv";

export default function VideosSection() {
  return (
    <IndexSection title={"Videos"}>
        <div className=" w-full flex flex-row flex-wrap items-center justify-center">

      <VideoDiv 
        title={"Teleman Concerto"}
        blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
        <VideoDiv 
        title={"Teleman Concerto"}
        blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
        <VideoDiv 
        title={"Teleman Concerto"}
        blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
        </div>
    </IndexSection>
  )
}