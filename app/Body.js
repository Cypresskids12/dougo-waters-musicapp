import styles from "./styles.css"
import MusicBox from "./MusixBox"
export default function Body(){   //Body component
    return(
        <div className="body-content">
            <MusicBox name={"master of puppets"} artist={"metallica"} album={"master of puppets"} source={"Metallica_-_Master_of_Puppets_cover.jpg"} link={"https://www.youtube.com/watch?v=6xjJ2XIbGRk"} lyric={"obey your master"}/>
            <MusicBox name={"ride the lightning"} artist={"metallica"} album={"ride the lightning"} source={"/Ridetl.png"} link={"https://www.youtube.com/watch?v=dFEGaWYbGZ4"} lyric={"ride the lightning"}/>
            <MusicBox name={"yellow submarine"} artist={"the beetles"} album={"yellow submarine"} source={"/71BxmmJoN2L._UF1000,1000_QL80_.jpg"} link={"https://www.youtube.com/watch?v=m2uTFF_3MaA"} lyric={"yellow submarine"}/>
            <MusicBox name={"T.N.T"} artist={"AC/DC"} album={"T.N.T"} source={"/ACDC-T.N.T.jpg"} link={"https://www.youtube.com/watch?v=CiJeSSzu9Bo"} lyric={"T.N.T it's dynomite"}/>
            <MusicBox name={"welcome to the jungle"} artist={"guns and roses"} album={"appatite for destruction"} source={"/MV5BODMwZmYyZmQtODlhNy00YmY5LTk0NTItODQ2OTJlMDIzMWUzXkEyXkFqcGdeQXVyMTMxMjE4NTMz._V1_.jpg"} link={"https://www.youtube.com/watch?v=o1tj2zJ2Wvg"} lyric={"welcome to the jungle"}/>
            <MusicBox name={"For Whom The Bell Tolls"} artist={"metallica"} album={"ride the lightning"} source={"/ForWhomTheBellTolls+LIBRARY+HARD.jpg"} link={"https://www.youtube.com/watch?v=B_HSa1dEL9s"} lyric={"accept the will to be"}/>
            <MusicBox name={"seek and destroy"} artist={"metallica"} album={"no life 'Til leather"} source={"/maxresdefault.jpg"} link={"https://www.youtube.com/watch?v=FLTchCiC0T0"} lyric={"seek and destroy"}/>
            <MusicBox name={"fight fire with fire"} artist={"metallica"} album={"ride the lightning"} source={"/download.jpg"} link={"https://www.youtube.com/watch?v=8zSODUOoE8w"} lyric={"the gods are laughing, so take your last breath"}/>
            <MusicBox name={"The Thing That Should Not Be"} artist={"metallica"} album={"master of puppets"} source={"/hq720.jpg"} link={"https://www.youtube.com/watch?v=6xjJ2XIbGRk"} lyric={"obey your master"}/>
            <MusicBox name={"fade to black"} artist={"metallica"} album={"ride the lightning"} source={"/artworks-000178864273-s8dgmn-t500x500.jpg"} link={"https://www.youtube.com/watch?v=9HZ_tx8aWuA"} lyric={"need the end to set me free"}/>
        </div>
    )
}

/*
song 1 master of puppets, metallica, master of puppets, https://www.youtube.com/watch?v=6xjJ2XIbGRk, obey your master 
song 2 ride the lightning, metallica, ride the lightnig, https://www.youtube.com/watch?v=dFEGaWYbGZ4, ride the lightning
song 3 yellow submarine, the beetles, yellow submarine, https://www.youtube.com/watch?v=m2uTFF_3MaA, yellow submarine
song 4 T.N.T, AC/DC, T.N.T, https://www.youtube.com/watch?v=CiJeSSzu9Bo, T.N.T it's dynomite
song 5 welcome to the jungle,appatite for destruction, guns and roses, https://www.youtube.com/watch?v=o1tj2zJ2Wvg, welcome to the jungle
song 6 For Whom The Bell Tolls, metallica, ride the lightning, https://www.youtube.com/watch?v=B_HSa1dEL9s, accept the will to be
song 7 seek and destroy, metallica, no life 'Til leather, https://www.youtube.com/watch?v=FLTchCiC0T0, seek and destroy 
song 8 fight fire with fire, metallica, ride the lightning, https://www.youtube.com/watch?v=8zSODUOoE8w the gods are laughing, so take your last breath
song 9 The Thing That Should Not Be, metallica, master of puppets, https://www.youtube.com/watch?v=bYJGt67Mwmo, immortal
song 10 fade to black, metallica, ride the lightning, https://www.youtube.com/watch?v=9HZ_tx8aWuA, need the end to set me free
*/