import React from "react";
import { joinByColon } from "../../helpers/utils";

const IconAndText = ({ icon, text }) => {
  return (
    <>
      <span className="icon has-text-info" style={{ marginRight: 10 }}>
        <i className={`fas fa-${icon}`} />
      </span>
      {text}
      <br />
    </>
  );
};

export const DAWCardDetails = ({ post }) => {
  return (
    <p className="subtitle is-6">
      <span style={{ color: "grey" }}>by {post.maker}</span>

      <br />
      <br />

      <IconAndText icon="tag" text={post.price} />

      <IconAndText icon="music" text={post.genre} />

      <IconAndText icon="microphone-alt" text={joinByColon(post.useCase)} />

      <IconAndText icon="desktop" text={joinByColon(post.os)} />

      <IconAndText icon="plug" text={joinByColon(post.plugin)} />

      <IconAndText icon="sitemap" text={joinByColon(post.interface)} />
    </p>
  );
};
