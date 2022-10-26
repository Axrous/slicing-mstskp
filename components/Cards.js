import Card from "./Card";
import CardTitle from "./CardTitle";
import CardParagraf from "./CardParagraf";

export default function Cards() {
  return (
    <div className="w-6/12">
      <div className="flex flex-wrap">
        <Card variant="bg-black">
          <CardTitle addClassName="text-white">Database</CardTitle>
          <CardParagraf addClassName="text-white">
            Data insight yang banyak kan bakal disimpen di database, ya kalo
            datanya banyak kan jadi gede juga size database-nya.
          </CardParagraf>
        </Card>
        <Card className={"border-l-2"}>
          <CardTitle>Server</CardTitle>
          <CardParagraf>
            Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server
            harus idup terus, itu butuh listrik!
          </CardParagraf>
        </Card>
        <Card className={"border-t-2"}>
          <CardTitle>Listrik</CardTitle>
          <CardParagraf>
            Biaya listrik mahal, bos! Listrik kita ini masih batu bara, nggak
            bagus buat lingkungan. Kalo pake nuklir sih oke-oke aja.
          </CardParagraf>
        </Card>
        <Card className="border-l-2 border-t-2">
          <CardTitle>Lingkungan</CardTitle>
          <CardParagraf>
            Pokoknya nggak bagus lah buat lingkungan, ini alesan kita kenapa gak
            kasih insight. Demi menyelamatkan bumi!
          </CardParagraf>
        </Card>
      </div>
    </div>
  );
}
