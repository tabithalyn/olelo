import { Tooltip } from "react-tooltip";
import { Main, Title } from "../global.style";

const Resources = () => {
  return (
    <>
      <Main>
      <Title><u data-tooltip-id="resources">Waiwai</u></Title>
        <Tooltip
          id="resources"
          place="right"
          content="Resources"
          border="2px solid #19210f"
          style={{ padding: "15px 20px", backgroundColor: "#e4edd8", fontFamily: "'Lato', sans-serif", fontSize: "16px", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", marginLeft: "5px", color: "#19210f", fontStyle: "italic" }}
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum sed purus in euismod. Nam et elit in ipsum accumsan posuere quis vel justo. Integer vitae urna augue. Donec efficitur ornare tempor. Fusce vel orci lacus. Sed condimentum lacinia massa sed accumsan. Cras accumsan, metus sit amet malesuada gravida, dolor nulla accumsan tellus, condimentum lobortis eros enim et nibh. Proin fermentum ex sit amet mauris efficitur tempor. Aliquam erat volutpat. Suspendisse lorem sem, feugiat eu tristique sit amet, egestas ut sapien. Maecenas id volutpat neque, quis pretium velit. Curabitur volutpat, lectus vel dapibus vehicula, ex eros lacinia est, nec elementum risus metus ac felis.</p>
        <p>Suspendisse ante lorem, consectetur ut nisi vel, accumsan porttitor arcu. Quisque arcu mi, efficitur non lacinia eget, interdum id neque. Donec tempor nulla massa, vel fermentum eros ultricies at. Nulla sodales tellus id dignissim congue. Ut lobortis est in risus gravida, pellentesque facilisis tortor convallis. Cras vitae nisi massa. Sed euismod faucibus lectus quis hendrerit. In a sem vestibulum, ultricies ipsum id, pretium est. In in vehicula enim. Donec id risus id est facilisis condimentum.</p>
        <p>Aenean ultrices tellus ut tellus posuere, vel suscipit nisl imperdiet. Phasellus molestie tristique lectus, fringilla gravida enim aliquet et. In eget cursus justo, sed dignissim urna. Pellentesque rutrum imperdiet mi, vitae tincidunt ligula. Curabitur euismod tristique magna in aliquam. Duis vehicula blandit eros id ultrices. Sed elementum ex nunc, a varius magna gravida in. Nulla volutpat leo sed consectetur sollicitudin. Nunc nunc justo, cursus id fermentum ut, eleifend et lacus. Suspendisse potenti. Suspendisse pharetra vel sapien sed tincidunt. Nam interdum nisi id turpis fringilla, in aliquam purus congue. Maecenas malesuada sollicitudin est ac ullamcorper. Sed sollicitudin nunc est, vel lacinia dui sodales a.</p>
        <p>Sed quis mi eget massa efficitur fermentum a a diam. Integer massa ante, sollicitudin quis porta id, luctus non magna. Nunc arcu urna, finibus a sodales non, vehicula quis quam. Integer imperdiet porta quam. In hac habitasse platea dictumst. Suspendisse ultricies mauris venenatis efficitur molestie. Nulla facilisi.</p>
        <p>Maecenas efficitur nibh ut sem dignissim tempus. Sed lacinia varius pharetra. Quisque sollicitudin accumsan felis vitae consectetur. Suspendisse ligula purus, interdum id mauris vitae, euismod vulputate ligula. Ut hendrerit est mauris, at tempor dui sagittis hendrerit. Fusce rhoncus, nisl sit amet efficitur laoreet, sapien enim ultrices nisl, dapibus mollis augue diam ut purus. Sed vulputate magna sit amet enim lacinia suscipit. Nunc sed sem at ex accumsan interdum. Suspendisse euismod dolor eget felis tincidunt sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean accumsan arcu at erat sollicitudin, a condimentum diam laoreet. Suspendisse blandit at ligula efficitur placerat. Etiam luctus venenatis arcu at lacinia. Donec magna justo, aliquet in nisi feugiat, efficitur tincidunt nibh.</p>
      </Main>
    </>
  );
}
 
export default Resources;