import Image from "next/image";

type VideoDivProps = {
  title: string
  blurb: string

}

export default function VideoDiv(props: VideoDivProps) {
  const { title, blurb} = props;
  return (
    <div className="flex flex-col text-zinc-600 m-6">
      <div className="w-[275px] h-[150px]  shadow-2xl my-4">
        <Image src={"http://placebeard.it/275/150"} width={275} height={150} alt="Placeholder for a profile pic" title="Profile picture placeholder"/>
      </div>
      <h3 className="font-semibold my-2">{title}</h3>
      <p>{blurb}</p>
    </div>
  )
}