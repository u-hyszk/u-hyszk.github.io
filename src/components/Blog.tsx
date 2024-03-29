import * as React from 'react';
import axios, { AxiosResponse } from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiQiita } from "react-icons/si";
import { IoGameController } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { FaBaseballBall } from "react-icons/fa";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';  
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import kobeImg from '../imgs/kobe-hyszk.jpg';
import itachiImg from '../imgs/u-hyszk.jpg';
import publications from './markdown/publications.md';
import awards from './markdown/awards.md';
import education from './markdown/education.md';
import internship from './markdown/internship.md';
import skills from './markdown/skills.md';
import qualifications from './markdown/qualifications.md';
import { ChatbotConfig }  from '../chatbot/ChatbotConfig';
import { MessageParser } from '../chatbot/Messageparser';
import { ActionProvider } from '../chatbot/ActionProvider';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CloseIcon from '@mui/icons-material/Close';
import './Blog.css';


const sections = [
  { title: '研究発表 / Publications', url: '#M0' },
  { title: '受賞 / Awards', url: '#M1' },
  { title: '学歴 / Education', url: '#M2' },
  { title: 'インターンシップ他 / Internship', url: '#M3' },
  { title: 'スキル / Skills', url: '#M4' },
  { title: '資格 / Qualifications', url: '#M5' },
  { title: '連絡先 / Contact', url: '#footer' },
];

const mainFeaturedPost = {
  title: '林崎 由',
  affiliation: "東北大学大学院 工学研究科",
  specialized: "通信工学専攻",
  grade: "修士1年",
  image: kobeImg,
  imageText: 'main image description',
  social: [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/u-hyszk'},
    { name: 'X', icon: FaSquareXTwitter, url: 'https://twitter.com/u_hyszk'},
    { name: 'Qiita', icon: SiQiita, url: 'https://qiita.com/u-hyszk'},
  ],
};

const sidebar = {
  interests: [
    '人工知能の社会実装 / 社会課題解決',
    '自然言語処理 (LLM・高速化・評価)',
    '音声対話',
    'マルチモーダル',
  ],
  hobbys: [
    { description: 'ゲーム', icon: IoGameController },
    { description: '研究 / プログラミング', icon: FaLaptopCode },
    { description: '旅行 (大学3年〜)', icon: MdFlightTakeoff },
    { description: '野球 (〜中学校)', icon: FaBaseballBall },
  ],
  miscs: [
    'あだ名は「イタチ」です',
  ],
};

const theme = createTheme();

export default function Blog() {

  // for chatbot
  const [showChatbot, setShowChatbot] = React.useState(false);

  // for markdown rendering
  const [posts, setPosts] = React.useState<Array<any>>([]);
  React.useEffect(() => {
    Promise.all([
      axios.get(publications),
      axios.get(awards),
      axios.get(education),
      axios.get(internship),
      axios.get(skills),
      axios.get(qualifications)
    ]).then((res: AxiosResponse[]) => {
      setPosts(
        res.map((r) => r.data)
      );
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          avatar={itachiImg}
          title="Yu Hayashizaki / u-hyszk"
          sections={sections}
        />
        <main>
          <MainFeaturedPost
            post={mainFeaturedPost}
            social={mainFeaturedPost.social}
          />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="About Me" posts={posts} />
            <Sidebar
              interests={sidebar.interests}
              hobbys={sidebar.hobbys}
              miscs={sidebar.miscs}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Yu Hayashizaki / u-hyszk"
        description="Email: hayashizaki.yu.t5[at]dc.tohoku.ac.jp"
      />
      <div
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '40px',
          zIndex: 100,
          display: showChatbot ? 'block' : 'none',
        }}
      >
        <Chatbot
          config={ChatbotConfig}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          headerText='Q&A'
          placeholderText='質問を入力'
        />
      </div>

      <IconButton
        style={{
          width: '50px',
          height: '50px',
          position: 'fixed',
          bottom: '15px',
          right: '40px',
          zIndex: 100,
          fontSize: '24px',
          fontWeight: 'bold',
          backgroundColor: '#2898ec',
        }}
        onClick={() => setShowChatbot(!showChatbot)}
      >
        {showChatbot ? <CloseIcon color="inherit" /> : <QuestionMarkIcon />}
      </IconButton>
    </ThemeProvider>
  );
}