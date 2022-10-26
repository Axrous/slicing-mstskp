import Card from "./Card";
import Image from "./Image";
import ImageParagraf from "./ImageParagraf";
import ImageTitle from "./ImageTitle";

export default function Cards() {
  return (
    <>
      <Card>
        <Image>Love</Image>
        <ImageTitle>kamu Tidak Punya Kekasih</ImageTitle>
        <ImageParagraf>
          Sudah pasti orang yang tidak punya kekasih akan memiliki waktu luang
          yang banyak, jadi ya lo iseng aja gitu datang ke website ini.
        </ImageParagraf>
      </Card>
      <Card>
        <Image>Love</Image>
        <ImageTitle>Lo Wibu Autid</ImageTitle>
        <ImageParagraf>
          Iyh bener, biasanya wibu kalo nggak halu waifu suka iseng nggak jelas,
          termasuk mengunjungi website ini tanpa alasan yang jelas hehehe..
        </ImageParagraf>
      </Card>
      <Card>
        <Image>Love</Image>
        <ImageTitle>Kok Gambar Ayam?</ImageTitle>
        <ImageParagraf>
          Lah ngatur. Nggak tau lagi gwej alasan yang ketiga, biar bagus aja
          desainnya. Kalo cuman dua jadinya nggak bagus hehe.
        </ImageParagraf>
      </Card>
    </>
  );
}
