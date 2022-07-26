import Image from "next/image";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <div className="about-img">
      <Image src="/images/FK BW FLUTE BW 1.jpg" width={3485} height={4091}/>
      </div>
      <div className="about-body">
        <h1 className="page-title">About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus mi, iaculis ac nibh a, posuere pretium diam. Curabitur imperdiet, felis a ornare gravida, sapien sapien tempus sapien, vitae feugiat ligula mauris sed nisl. Nunc eget cursus ex, sit amet commodo erat. Proin varius mi sit amet massa faucibus euismod. Donec venenatis, elit in eleifend mattis, ex nisi porta tellus, nec venenatis massa nibh non velit. Cras quis rutrum ipsum. Vivamus mollis sed nisi eget imperdiet. Suspendisse risus urna, consectetur eu volutpat ac, dignissim quis nisl. Pellentesque vel consectetur dui. Morbi ultrices nunc neque, nec consectetur dolor luctus in. Sed sed urna at enim ultricies suscipit vitae vel risus. Morbi at feugiat felis. In commodo nunc ac ipsum pulvinar sodales. Cras efficitur sem eu lacus vehicula tristique. Proin interdum lobortis est ut congue. Duis ornare ligula mi, sed accumsan tortor euismod nec.</p>
        <p>Integer nec mi quis augue pretium tristique ut in est. Ut ac finibus justo, non dapibus arcu. Mauris a mi sed ligula tristique hendrerit. Cras aliquam ante sapien, at pretium ante hendrerit sit amet. Fusce elementum semper mollis. In porttitor, arcu at sollicitudin condimentum, erat libero viverra arcu, at varius lorem risus semper lorem. Cras eget justo dictum, mollis elit ullamcorper, consectetur massa. Phasellus non augue hendrerit, facilisis nisl id, consequat quam. Curabitur neque odio, imperdiet eget eros ac, aliquet lacinia lacus.</p>
        <p>Maecenas ac diam vestibulum, feugiat velit viverra, lobortis mauris. Integer id sapien ut leo sodales maximus. Suspendisse potenti. Sed dapibus iaculis massa nec efficitur. Morbi consectetur vel odio non dapibus. Ut ac quam molestie, scelerisque magna at, tempor lacus. Mauris porta sit amet felis sed pharetra. Phasellus ut tempus turpis, ut auctor quam. Nullam ut fringilla nisl. In hac habitasse platea dictumst. Donec mollis enim a nisl rutrum, et rhoncus enim fermentum. Quisque vulputate est mauris, vel viverra massa rhoncus in. Maecenas vehicula eros quam, quis vulputate quam tincidunt id. Nulla aliquam pretium dictum.</p>
        <p>Suspendisse pretium ullamcorper ipsum, et fermentum leo ullamcorper sit amet. Nullam rhoncus arcu ac iaculis laoreet. Morbi in consectetur turpis, sed aliquam magna. Proin nec magna quis ante fermentum auctor. Phasellus posuere purus eget massa vestibulum feugiat. Fusce ac porta nunc, vel ultricies felis. Sed quis lacus efficitur, facilisis eros sit amet, bibendum dolor. Duis euismod erat vulputate leo porta, euismod accumsan nunc ultrices. Maecenas quam enim, ultrices nec varius nec, imperdiet et nulla. Aliquam vel ex et orci hendrerit efficitur. Donec fermentum magna ac diam bibendum porta. Proin auctor sem tellus, a tristique quam maximus non. Nunc sagittis pulvinar placerat.</p>
        <p>Aliquam aliquet massa enim, ac volutpat augue convallis in. Etiam non tortor in nibh ullamcorper commodo at a massa. Phasellus mauris ipsum, aliquet nec faucibus varius, tempus ut ante. Ut pharetra velit non tortor tincidunt, nec tincidunt nunc laoreet. Cras vulputate mauris viverra augue consectetur, eu pellentesque velit porttitor. Etiam egestas lacus ligula, sit amet dapibus nulla mollis sit amet. Suspendisse turpis purus, gravida eget congue ac, gravida vitae magna. Vivamus volutpat justo ut mauris ultrices tempus. Fusce posuere ornare egestas.</p>
      </div>
    </Layout>
  )
}