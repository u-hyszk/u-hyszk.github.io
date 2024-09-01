import React from "react";

import Options from "../Options/Options";

const GeneralOptions = (props: any) => {
  const options = [
    {
      name: "好きな食べ物はなんですか？",
      handler: () => {},
      id: 1
    },
    {
    name: "好きな食べ物はなんだというのですか？",
    handler: () => {},
    id: 1
    },
    {
    name: "Can you speak English？",
    handler: () => {},
    id: 1
    },
  ];
  return <Options options={options} {...props} />;
};

export default GeneralOptions;