import {
  MessageType,
  SenderDataType,
} from "../sections/chats/chat_components/chat_messages_components/Message";
import { ProfileData } from "../sections/profile/ProfilePage";

export class All {
  private id: number;
  private token: string;

  constructor(id: number, token: string) {
    this.id = id;
    this.token = token;
  }

  getId(): number {
    return this.id;
  }
  fetchMyData(): SenderDataType {
    const myData: SenderDataType = {
      id: 0,
      username: "mateja",
      photoUrl:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    };
    return myData;
  }

  fetchProfileData(): ProfileData {
    const myData: ProfileData = {
      id: 0,
      fname: "Mateja",
      lname: "Bogdanovic",
      email: "mateja@hotmail.com",
      description: "Web Developer", // regular description | role | education
      location: "Belgrade, Serbia",
      photoUrl:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bannerUrl:
        "https://images.pexels.com/photos/7233356/pexels-photo-7233356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    };
    return myData;
  }
  fetchMessages(
    recieverId: number,
    recievedMessageCount: number,
    wantToRecieveMessagesCount: number
  ): MessageType[] {
    // todo: fetch data => send my token id, recieverId, recievedMessageCount and wantToRecieveMessagesCount
    const data: MessageType[] = [
      {
        from: 1,
        to: 0,
        content: "Ćaooo!",
        date: "25.04.2025. 19:05",
      },
      {
        from: 0,
        to: 1,
        content: "Važi, pozdrav!",
        date: "25.04.2025. 19:04",
      },
      {
        from: 1,
        to: 0,
        content: "Nema na čemu brt, uvek! Čujemo se još kasnije.",
        date: "25.04.2025. 19:03",
      },
      {
        from: 0,
        to: 1,
        content:
          "Ajde, držim fige! I hvala ti još jednom za sve što si mi poslao.",
        date: "25.04.2025. 19:02",
      },
      {
        from: 1,
        to: 0,
        content: "To bi bilo brutalno. Aj vidimo kad dođu rasporedi.",
        date: "25.04.2025. 19:01",
      },
      {
        from: 0,
        to: 1,
        content: "Super, i ja sam se prijavio. Možda upadnemo u isti tim.",
        date: "25.04.2025. 19:00",
      },
      {
        from: 1,
        to: 0,
        content: "Na onaj hackathon? Mislim da hoću, zvuči zanimljivo.",
        date: "25.04.2025. 18:59",
      },
      {
        from: 0,
        to: 1,
        content: "Inače, jel planiraš da ideš na onaj događaj sledeće nedelje?",
        date: "25.04.2025. 18:58",
      },
      {
        from: 1,
        to: 0,
        content: "Evo uploadujem sad, trebalo bi da bude gotovo za 5 minuta.",
        date: "25.04.2025. 18:57",
      },
      {
        from: 0,
        to: 1,
        content: "Top si! Pošalji kad stigneš, ne žuri.",
        date: "25.04.2025. 18:56",
      },
      {
        from: 1,
        to: 0,
        content: "Imam sve, mogu ti baciti na Google Drive ako ti odgovara.",
        date: "25.04.2025. 18:55",
      },
      {
        from: 0,
        to: 1,
        content:
          "Jel imaš možda ona predavanja iz prošle nedelje? Nisam stigao da idem.",
        date: "25.04.2025. 18:54",
      },
      {
        from: 1,
        to: 0,
        content:
          "Ma da, i ja sam prvo drugačije hteo, al sam video da komplikujem bezveze.",
        date: "25.04.2025. 18:53",
      },
      {
        from: 0,
        to: 1,
        content:
          "Evo stiglo, hvala! Vidiš, ovaj deo sam totalno drugačije zamislio.",
        date: "25.04.2025. 18:52",
      },
      {
        from: 1,
        to: 0,
        content:
          "Važi, šaljem ti sad na mejl. Proveri folder 'spam', meni stalno tamo ide.",
        date: "25.04.2025. 18:51",
      },
      {
        from: 0,
        to: 1,
        content:
          "Aj pošalji, hvala ti brt. Ako ti nešto zatreba javi slobodno.",
        date: "25.04.2025. 18:50",
      },
      {
        from: 1,
        to: 0,
        content:
          "Znam, isti problem. Ako hoćeš mogu ti poslati kako sam ja uradio pa vidi ako ti nešto znači.",
        date: "25.04.2025. 18:49",
      },
      {
        from: 0,
        to: 1,
        content:
          "Nisam još skroz, radim sad na onom zadnjem zadatku. Previše glupih zahteva.",
        date: "25.04.2025. 18:48",
      },
      {
        from: 1,
        to: 0,
        content:
          "Ej brate, jel si završio onaj projekat za faks? Ja sam ga jedva sklepao sinoć.",
        date: "25.04.2025. 18:47",
      },
      {
        from: 1,
        to: 0,
        content: Date.now().toLocaleString(),
        date: "25.04.2025. 18:47",
      },
    ];

    // return [];
    return data.slice(
      recievedMessageCount,
      recievedMessageCount + wantToRecieveMessagesCount
    );
  }
}
