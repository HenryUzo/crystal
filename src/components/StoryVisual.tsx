import type { SceneKind } from "../data/chapters";

type StoryVisualProps = {
  kind: SceneKind;
  imageSrc?: string;
  imageAlt: string;
};

function ArchitectureScene() {
  return (
    <svg className="scene-art" viewBox="0 0 700 730" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="arch-face" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1e6d4" />
          <stop offset="1" stopColor="#ba9e7a" />
        </linearGradient>
        <linearGradient id="arch-shadow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a89276" />
          <stop offset="1" stopColor="#615c4f" />
        </linearGradient>
      </defs>
      <circle cx="515" cy="140" r="125" fill="#e1d4b7" opacity=".7" />
      <path d="M35 650L330 520 675 630 358 725Z" fill="#857e67" opacity=".2" />
      <path d="M180 215L450 105 597 194 329 304Z" fill="#e6d8bd" />
      <path d="M180 215L329 304V633L180 553Z" fill="url(#arch-shadow)" />
      <path d="M329 304L597 194V532L329 633Z" fill="url(#arch-face)" />
      <path d="M342 328L581 230V257L342 355Z" fill="#6b6556" opacity=".68" />
      <path d="M343 385L581 287V313L343 410Z" fill="#736956" opacity=".55" />
      <path d="M342 441L581 344V372L342 469Z" fill="#796e5e" opacity=".46" />
      <path d="M342 499L581 401V428L342 524Z" fill="#897962" opacity=".45" />
      <path d="M342 554L581 457V484L342 580Z" fill="#8b7b62" opacity=".45" />
      <path d="M217 326L293 363V552L217 514Z" fill="#3f4845" opacity=".82" />
      <path d="M229 351L285 379M229 392L285 420M229 433L285 461" stroke="#c9b69a" strokeWidth="3" opacity=".8" />
      <path d="M101 582L291 665 326 646 130 559Z" fill="#b5a486" />
      <path d="M70 607L270 693 298 676 97 590Z" fill="#cfbda1" />
      <path d="M43 631L250 718 277 699 70 612Z" fill="#ead9bc" />
      <path d="M329 304L597 194" stroke="#f5ead8" strokeWidth="5" />
      <path d="M329 633L597 532" stroke="#8a775e" strokeWidth="4" />
    </svg>
  );
}

function ObjectsScene() {
  return (
    <svg className="scene-art" viewBox="0 0 700 730" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="chair-seat" x1="0" y1="0" x2=".8" y2="1">
          <stop offset="0" stopColor="#c17f60" />
          <stop offset="1" stopColor="#824d3b" />
        </linearGradient>
      </defs>
      <circle cx="390" cy="320" r="244" fill="#dbc6af" />
      <ellipse cx="364" cy="633" rx="235" ry="38" fill="#5a504a" opacity=".16" />
      <path d="M211 205Q226 123 352 123Q484 127 502 219L474 414Q433 461 345 462Q255 460 223 401Z" fill="url(#chair-seat)" />
      <path d="M234 228Q246 170 352 168Q451 169 471 237L448 377Q401 408 351 405Q285 405 248 371Z" fill="#d6a78a" />
      <path d="M219 416Q219 390 244 387L483 389Q501 392 501 415L476 476Q469 490 445 495L265 496Q244 491 235 479Z" fill="#965f46" />
      <path d="M240 406Q330 380 484 406L462 450Q358 472 251 449Z" fill="#c58d70" />
      <path d="M261 495L249 637" stroke="#513e37" strokeWidth="20" strokeLinecap="round" />
      <path d="M447 496L468 637" stroke="#513e37" strokeWidth="20" strokeLinecap="round" />
      <path d="M250 531L454 530" stroke="#61483b" strokeWidth="13" strokeLinecap="round" />
      <path d="M262 638L235 642M467 638L495 641" stroke="#513e37" strokeWidth="15" strokeLinecap="round" />
    </svg>
  );
}

function OpportunityScene() {
  return (
    <svg className="scene-art" viewBox="0 0 700 730" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="page" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2e9d6" />
          <stop offset="1" stopColor="#c7baa2" />
        </linearGradient>
      </defs>
      <circle cx="413" cy="245" r="190" fill="#d8d9bf" />
      <path d="M174 545L332 467 564 547 408 634Z" fill="#596d5e" opacity=".13" />
      <path d="M210 477L384 410 543 477 380 543Z" fill="#b88765" />
      <path d="M210 477V520L380 590V543Z" fill="#7d6153" />
      <path d="M380 543L543 477V519L380 590Z" fill="#dfc8a8" />
      <path d="M200 423L368 367 535 434 372 493Z" fill="#f3e9d6" />
      <path d="M200 423V469L372 536V493Z" fill="#9b9980" />
      <path d="M372 493L535 434V479L372 536Z" fill="#ddd3bb" />
      <path d="M217 355L375 302 513 354 363 408Z" fill="#71826e" />
      <path d="M217 355V407L363 463V408Z" fill="#43594e" />
      <path d="M363 408L513 354V405L363 463Z" fill="#c7caa9" />
      <path d="M273 206Q359 177 424 207L413 331Q355 312 300 334Z" fill="url(#page)" />
      <path d="M424 207Q475 178 526 199L498 329Q459 315 413 331Z" fill="#fff9eb" />
      <path d="M413 331L422 208" stroke="#b4a88f" strokeWidth="4" />
      <path d="M305 248L393 230M310 269L390 252M434 240L506 227M429 261L496 251" stroke="#8b8b76" strokeWidth="3" opacity=".65" />
      <path d="M164 236L170 204M148 219L181 224M540 115L556 83M528 94L561 105" stroke="#e9efe1" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

export default function StoryVisual({ kind, imageSrc, imageAlt }: StoryVisualProps) {
  return (
    <div className={"story-art story-art--" + kind}>
      {imageSrc ? (
        <img className="story-art__image" src={imageSrc} alt={imageAlt} loading={kind === "architecture" ? "eager" : "lazy"} />
      ) : (
        <>
          {kind === "architecture" && <ArchitectureScene />}
          {kind === "objects" && <ObjectsScene />}
          {kind === "opportunity" && <OpportunityScene />}
          <span className="story-art__placeholder">Concept visual / Awaiting approved imagery</span>
        </>
      )}
      <span className="story-art__index" aria-hidden="true">CK — 00{kind === "architecture" ? "1" : kind === "objects" ? "2" : "3"}</span>
    </div>
  );
}

