import Layout from "../components/Layouts";
import { Controls } from "../components/Controls";
import Viewer from "../components/Viewer";
import DMG from "../components/Models/DMG";

export default function Home() {
  return (
    <Layout>
      <Viewer>
        <DMG />
      </Viewer>
      <Controls />
    </Layout>
  );
}
