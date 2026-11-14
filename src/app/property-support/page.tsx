import type { Metadata } from "next";
import Link from "next/link";
import { LINE_URL, PHONE_NUMBER, PHONE_TEL_LINK } from "@/lib/constants";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "不動産オーナー・管理会社向け現場サポート｜くるめ生活サポート",
  description: "東京都東久留米市を拠点に、関東一円の不動産オーナー・管理会社様から現地確認・写真報告・軽作業などのご相談に対応。遠方は内容・移動距離に応じて個別見積もり。",
  alternates: { canonical: "/property-support" },
  openGraph: { title: "不動産管理の「ちょっと手が足りない」に｜くるめ生活サポート", description: "不動産オーナー・管理会社様向けの現地確認・写真報告・軽作業サポート。", url: "https://kurume-support.com/property-support", type: "website" },
};
const work = [
  ["現地確認・写真報告","物件の状況を目視で確認し、写真を撮影してご報告。担当者様が現地へ行く時間を取りにくいときに。"],
  ["管理物件の軽作業","備品の簡単な設置・交換補助、共用部の簡易清掃、片付けの補助など。内容を確認して対応します。"],
  ["家具・什器の組立・移動","収納棚・ベッド・デスク・椅子の組立や室内の家具移動。複数人が必要な作業もご相談ください。"],
  ["敷地内の環境整備","敷地の草むしり、建物周辺や通路の簡易清掃など、ちょっとしたお手入れをサポート。"],
];
const flow = [["ご相談","物件所在地、作業内容、写真、ご希望日時をお知らせください。"],["内容確認・お見積もり","作業可否・料金・対応可能日時をご案内します。"],["現地対応","立ち入りや安全の条件を確認して作業します。"],["完了報告・お支払い","必要に応じて写真で報告。請求書発行・銀行振込も承ります。"]];
export default function PropertySupportPage() {
return <main className={styles.page}>
<header><div className={styles.wrap}><Link href="/" className={styles.brand}>くるめ生活サポート</Link><Link href="/" className={styles.home}>一般のお客様はこちら</Link></div></header>
<section className={styles.hero}><div className={styles.wrap}>
<p className={styles.kicker}>PROPERTY OWNER & MANAGEMENT SUPPORT</p>
<h1>管理物件の<br/><em>「ちょっと手が足りない」</em>に。</h1>
<h2>不動産オーナー様・管理会社様向け<br/>現地確認・写真報告・軽作業のスポットサポート</h2>
<p>専門業者を手配するほどではない小さな作業や、担当者様がなかなか現場に行けないときに。東久留米を拠点とする地域の便利屋が、内容を確認して丁寧にお手伝いします。</p>
<div className={styles.actions}><a className={styles.line} href={LINE_URL} target="_blank" rel="noopener noreferrer">LINEで相談する</a><a className={styles.phone} href={PHONE_TEL_LINK}>電話で相談する</a></div>
<small>予約制・対応可能な日時をご案内します。24時間の緊急駆け付けを保証するものではありません。</small>
</div></section>
<section className={styles.section}><div className={styles.wrap}><p className={styles.kicker}>SERVICES</p><h2>こんな場面でご相談ください</h2><div className={styles.cards}>{work.map(([title,desc],i)=><article className={styles.card} key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div><p className={styles.muted}>※ご相談いただける業務例です。すべてに対応実績があるという意味ではありません。作業可否は内容や設備・安全条件により個別に判断します。</p></div></section>
<section className={styles.band}><div className={styles.wrap}><p className={styles.kicker}>OUR APPROACH</p><h2>小さなご依頼から、信頼を積み重ねる。</h2><p>家具組立・家具移動・片付けなどの作業経験を活かし、現場での状況確認と丁寧なご説明を大切にします。現場の様子を写真で報告するなど、担当者様が状況を把握しやすい対応を心がけます。</p><div className={styles.tags}><span>単発のご相談から</span><span>作業前の料金説明</span><span>写真付き報告に対応</span><span>請求書・銀行振込に対応</span></div></div></section>
<section className={styles.section}><div className={styles.wrap}><p className={styles.kicker}>PRICE & AREA</p><h2>料金・対応エリア</h2><div className={styles.prices}><div><span>訪問サポート（軽作業1時間まで）</span><strong>5,500円（税込）</strong></div><div><span>延長30分</span><strong>2,000円（税込）</strong></div><div><span>現地確認・写真報告・半日作業・増員対応など</span><strong>個別お見積もり</strong></div></div><p className={styles.muted}>表示料金は近隣エリアの基本目安です。遠方への出張は移動距離・作業内容・所要時間を確認し、出張費等を含めて個別にお見積もりします。部材費・高速料金・駐車料金等が必要な場合も事前にご説明します。</p><h3>対応エリア</h3><p>東京都東久留米市を拠点に、東京・埼玉・神奈川・千葉・茨城・栃木・群馬など、関東一円からのご相談を承ります。遠方の物件も内容や日程に応じて対応を検討いたしますので、まずは所在地とご依頼内容をお知らせください。</p></div></section>
<section className={styles.stepsSection}><div className={styles.wrap}><p className={styles.kicker}>HOW IT WORKS</p><h2>ご相談から完了まで</h2><div className={styles.steps}>{flow.map(([title,desc],i)=><div className={styles.step} key={title}><b>0{i+1}</b><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div><p className={styles.safety}>安全と法令遵守のため、電気工事や給排水設備の専門工事、危険な高所作業、許可を要する廃棄物の収集運搬などは対応対象外です。入居中のお部屋への立ち入りは必要な承諾・権限を確認します。</p></div></section>
<section className={styles.contact}><div className={styles.wrap}><p className={styles.kicker}>CONTACT</p><h2>現場の小さなお困りごと、<br/>まずはご相談ください。</h2><p>物件所在地・現場写真・希望する対応内容をお知らせいただけるとスムーズです。</p><div className={styles.actions}><a className={styles.line} href={LINE_URL} target="_blank" rel="noopener noreferrer">公式LINEで相談する</a><a className={styles.phoneLight} href={PHONE_TEL_LINK}>{PHONE_NUMBER}</a></div><small>受付 9:00〜18:00／主に金・土・日（予約制）</small></div></section>
<footer><div className={styles.wrap}>© 2026 くるめ生活サポート　 <Link href="/">トップページへ戻る</Link></div></footer>
</main>;
}