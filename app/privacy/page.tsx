import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | LUFiS",
  description: "LUFiS Co., Ltd. が提供するサービスにおけるプライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Simple header for legal pages */}
      <header className="border-b border-gray-200 bg-cream">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-display text-2xl font-bold tracking-wider text-primary"
          >
            LUFiS
          </Link>
          <Link
            href="/"
            className="font-body text-sm text-muted hover:text-primary transition-colors"
          >
            トップページへ戻る
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-display text-3xl font-bold tracking-wide text-primary mb-2">
          Privacy Policy
        </h1>
        <p className="font-body text-sm text-muted mb-12">
          プライバシーポリシー — 最終更新日: 2026年3月2日
        </p>

        <div className="space-y-10 font-body text-ink leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">
              1. はじめに
            </h2>
            <p className="text-sm">
              LUFiS Co., Ltd.（以下「当社」）は、当社が提供するサービス（VUAL、VUAL
              Studio for Shopify、その他当社が運営するアプリケーション）において、
              ユーザーのプライバシーを尊重し、個人情報の保護に努めます。
              本プライバシーポリシーは、当社サービスにおける情報の収集、利用、
              共有、保護について定めるものです。
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">
              2. 収集する情報
            </h2>
            <p className="text-sm mb-3">
              当社は、サービスの提供・改善のために以下の情報を収集することがあります。
            </p>

            <h3 className="text-sm font-bold text-primary mb-2">
              2.1 マーチャント（店舗運営者）の情報
            </h3>
            <ul className="list-disc pl-6 text-sm space-y-1 mb-4">
              <li>Shopifyストアドメイン</li>
              <li>サブスクリプション・プラン情報</li>
              <li>クレジット利用状況</li>
              <li>商品情報（AI画像生成に使用する商品画像・テキスト）</li>
            </ul>

            <h3 className="text-sm font-bold text-primary mb-2">
              2.2 エンドユーザー（顧客）の情報
            </h3>
            <ul className="list-disc pl-6 text-sm space-y-1 mb-4">
              <li>
                IPアドレス（Virtual
                Try-On機能の1日あたりの利用回数制限のためにのみ使用）
              </li>
              <li>アップロードされた写真（Virtual Try-On処理にのみ使用、保存しません）</li>
            </ul>

            <h3 className="text-sm font-bold text-primary mb-2">
              2.3 収集しない情報
            </h3>
            <p className="text-sm">
              当社は、氏名、メールアドレス、住所、電話番号、クレジットカード情報などの
              個人を直接特定できる情報は収集しません。決済はShopifyの課金システムを
              通じて処理され、当社が決済情報を直接取り扱うことはありません。
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">
              3. 情報の利用目的
            </h2>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li>AI画像生成サービスの提供</li>
              <li>Virtual Try-On（バーチャル試着）サービスの提供</li>
              <li>AI コピーライティング機能の提供</li>
              <li>サブスクリプション・クレジット利用量の管理</li>
              <li>不正利用の防止（1日あたりの利用回数制限）</li>
              <li>サービスの改善・新機能の開発</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">
              4. 第三者サービスとの情報共有
            </h2>
            <p className="text-sm mb-3">
              当社は、サービス提供のために以下の第三者サービスを利用しています。
            </p>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>
                <strong>Google Cloud / Gemini API</strong> —
                AI画像生成およびAIコピーライティングの処理に使用。
                送信された商品画像およびテキストはGoogleのAPIを通じて処理されます。
              </li>
              <li>
                <strong>Supabase</strong> —
                サブスクリプション管理、クレジット利用ログの保存に使用。
              </li>
              <li>
                <strong>Shopify</strong> —
                アプリのホスティング、認証、課金処理に使用。
              </li>
            </ul>
            <p className="text-sm mt-3">
              各サービスのプライバシーポリシーについては、各社の公式サイトをご参照ください。
              当社は、上記以外の第三者に対してユーザー情報を販売、貸与、
              または共有することはありません。
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">
              5. データの保管と削除
            </h2>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>
                <strong>サブスクリプション情報</strong> —
                アプリがインストールされている期間中保管されます。
              </li>
              <li>
                <strong>クレジット利用ログ</strong> —
                課金サイクルの管理のために保管されます。
              </li>
              <li>
                <strong>IPアドレス</strong> —
                レート制限のために一時的に記録され、定期的に削除されます。
              </li>
              <li>
                <strong>アップロード画像</strong> —
                Virtual Try-On処理のために一時的に使用され、処理完了後に削除されます。
                当社サーバーに恒久的に保存されることはありません。
              </li>
              <li>
                <strong>アプリのアンインストール時</strong> —
                Shopifyからアンインストールされた場合、48時間以内に
                当該ストアに関連するすべてのデータを削除します。
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">
              6. データのセキュリティ
            </h2>
            <p className="text-sm">
              当社は、収集した情報を不正アクセス、漏洩、改ざんから保護するために、
              業界標準のセキュリティ対策を講じています。すべての通信はSSL/TLSにより
              暗号化され、データベースへのアクセスは認証により制限されています。
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">
              7. お客様の権利
            </h2>
            <p className="text-sm">
              お客様は、当社が保有するご自身のデータについて、以下の権利を有します。
            </p>
            <ul className="list-disc pl-6 text-sm space-y-1 mt-2">
              <li>保有データの開示請求</li>
              <li>データの訂正・削除請求</li>
              <li>データ処理の制限請求</li>
            </ul>
            <p className="text-sm mt-2">
              これらの権利行使をご希望の場合は、下記の連絡先までお問い合わせください。
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">
              8. ポリシーの変更
            </h2>
            <p className="text-sm">
              当社は、法令の変更やサービス内容の変更に伴い、本ポリシーを更新する
              ことがあります。重要な変更がある場合は、サービス内の通知または
              当ウェブサイト上でお知らせします。
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">
              9. お問い合わせ
            </h2>
            <p className="text-sm">
              本プライバシーポリシーに関するご質問・ご要望は、以下までご連絡ください。
            </p>
            <div className="mt-4 bg-white border border-gray-200 rounded-lg p-6 text-sm">
              <p className="font-bold text-primary">LUFiS Co., Ltd.</p>
              <p className="mt-2 text-muted">
                メール:{" "}
                <a
                  href="mailto:privacy@lufis.co.jp"
                  className="text-primary underline"
                >
                  privacy@lufis.co.jp
                </a>
              </p>
              <p className="text-muted">
                ウェブサイト:{" "}
                <a
                  href="https://lufis.co.jp"
                  className="text-primary underline"
                >
                  https://lufis.co.jp
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Simple footer for legal pages */}
      <footer className="border-t border-gray-200 bg-cream py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-body text-xs text-muted">
            &copy; {new Date().getFullYear()} LUFiS Co., Ltd. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
