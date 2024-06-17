import {
  SvgTwitter,
  SvgEmail,
  SvgInstagram,
} from "@/app/assets/svg-collection";

export default function SocialMediaIcons({
  svgClassName,
}: {
  svgClassName: string;
}) {
  return (
    <>
      <a
        aria-label="Direct to X"
        href="https://www.x.com"
        target="_blank"
        className={svgClassName}
      >
        <SvgTwitter
          width={23}
          height={23}
          fill="none"
          className="hover: fill-current"
        />
      </a>
      <a
        aria-label="Direct to Instagram"
        href="https://www.instagram.com/"
        target="_blank"
        className={svgClassName}
      >
        <SvgInstagram
          width={23}
          height={23}
          fill="none"
          className="hover: fill-current"
        />
      </a>
      <a
        aria-label="Direct to Google Mail"
        href="https://mail.google.com/"
        target="_blank"
        className={svgClassName}
      >
        <SvgEmail
          width={23}
          height={23}
          fill="none"
          className="hover: fill-current"
        />
      </a>
    </>
  );
}
