import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophoneAlt,
  faTag,
  faMusic,
  faPlug,
  faDesktop,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { Typography } from "antd";
import { joinByColon } from "../../helpers/utils";

const { Text } = Typography;

export const IconAndText = ({ icon, text, textColor = "" }) => {
  return (
    <div>
      <Text style={{ color: textColor }}>
        <span className="logo-text-wrapper">
          <FontAwesomeIcon
            icon={icon}
            style={{ color: textColor || "#1890ff" }}
          />
        </span>
        {text}
      </Text>
    </div>
  );
};

export const DAWCardDetails = ({ post }) => {
  return (
    <>
      <IconAndText icon={faTag} text={post.price} />

      <IconAndText icon={faMusic} text={post.genre} />

      <IconAndText icon={faMicrophoneAlt} text={joinByColon(post.useCase)} />

      <IconAndText icon={faDesktop} text={joinByColon(post.os)} />

      <IconAndText icon={faPlug} text={joinByColon(post.plugin)} />

      <IconAndText icon={faSitemap} text={joinByColon(post.interface)} />
    </>
  );
};
