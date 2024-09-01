import { createChatBotMessage } from 'react-chatbot-kit';
import itachiImg from '../imgs/u-hyszk.jpg';
import GeneralOptions from './widgets/GeneralOptions/GeneralOptions';

export const ChatbotConfig = {
    botName: 'u-hyszk-Q&A-bot',
    initialMessages: [
        createChatBotMessage(
            '何か聞きたいことはありますか？',
            {
                widget: "options",
            }
        ),
    ],
    customComponents: {
       botAvatar: (props: any) => <img {...props} src={itachiImg} style={{borderRadius: "50%", width: "40px", height: "40px", marginRight: "12.5px", alignItems: "center", justifyContent: "center"}}/>,
    },
    state: {
        options: '',
    },
    widgets: [
        {
          props: "",
          widgetName: "options",
          widgetFunc: (props: any) => <GeneralOptions {...props} />,
          mapStateToProps: [],
        },
    ],
};
