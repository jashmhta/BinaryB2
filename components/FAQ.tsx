'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are Bonds?",
      answer: "Bonds are fixed-income securities that represent a loan made by an investor to a borrower (typically corporate or governmental). They are debt instruments where the issuer promises to pay back the principal amount along with periodic interest payments (coupons) to the bondholder. Bonds provide predictable income and are considered less risky than equities."
    },
    {
      question: "How is it different from Equity?",
      answer: "Bonds are debt instruments where you lend money to the issuer and receive fixed interest payments, while equities represent ownership in a company. Bonds offer predictable returns with lower risk, whereas equities offer potentially higher returns but with higher volatility. In case of liquidation, bondholders are paid before equity shareholders."
    },
    {
      question: "I am already investing in Mutual Funds, how is it different in Bonds?",
      answer: "Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities, managed by professionals. Direct bond investments give you ownership of specific bonds with fixed returns and maturity dates. Bonds offer more predictability and control over your investment, while mutual funds provide diversification and professional management."
    },
    {
      question: "How much can I invest initially?",
      answer: "The minimum investment amount varies by bond type and issuer. Typically, corporate bonds start from ₹1 Lakh to ₹10 Lakhs per bond, while government securities may have different minimums. We can help you find suitable bonds based on your investment capacity and financial goals."
    },
    {
      question: "Can I purchase the security and sell in few hours once the market has gone up? Can I transact (buy & sell) same day?",
      answer: "While technically possible, bonds are not designed for intraday trading like stocks. Bond prices don't fluctuate as much in short periods, and liquidity may be limited for same-day transactions. Bonds are better suited for medium to long-term investment horizons to earn the coupon income and benefit from price appreciation over time."
    },
    {
      question: "What is the guarantee that I will receive the interest on time?",
      answer: "Interest payments are contractual obligations of the issuer. The reliability depends on the credit rating and financial health of the issuer. Higher-rated bonds (AAA, AA) have stronger payment guarantees. Government securities are backed by the government, making them virtually risk-free. We recommend investing in highly-rated bonds to ensure timely interest payments."
    },
    {
      question: "What if the company (issuer) defaults?",
      answer: "In case of default, bondholders have legal recourse to recover their investment. Secured bonds have collateral backing, which can be liquidated to repay bondholders. Credit rating agencies continuously monitor issuers, and we provide bonds from reputable, well-rated companies to minimize default risk. Diversification across multiple issuers also helps mitigate this risk."
    },
    {
      question: "How risky is it to invest in bonds?",
      answer: "Bond risk varies by issuer and type. Government securities carry minimal risk, while corporate bonds carry credit risk depending on the issuer's financial health. Bonds are generally less risky than equities. Key risks include credit risk (default), interest rate risk (price fluctuation), and liquidity risk. We help you assess and manage these risks through proper bond selection and diversification."
    },
    {
      question: "Can I get secured + guaranteed (state / central government) bonds with higher yield?",
      answer: "Government securities (G-Secs) are the safest bonds backed by the government, but they typically offer lower yields compared to corporate bonds due to their low risk. For higher yields, you may consider highly-rated corporate bonds (AAA/AA) or tax-free bonds, which offer better returns while maintaining reasonable safety. We can help you balance risk and return based on your requirements."
    },
    {
      question: "Why is the pricing so high? At premium levels?",
      answer: "Bonds trade at premium when their coupon rate is higher than the prevailing market interest rates. Investors are willing to pay more for bonds offering higher interest than what's currently available in the market. The premium reflects the present value of future higher interest payments. This is normal market behavior and doesn't indicate overpricing."
    },
    {
      question: "The price shown on the BSE/NSE screen (website) is much lower compared to the pricing offered",
      answer: "Exchange screens show indicative prices which may not reflect actual transaction prices due to low liquidity, bid-ask spreads, and market depth. The prices we offer include transaction costs, settlement charges, and reflect actual executable prices in the market. Small retail trades visible on exchanges may not represent institutional pricing for larger transactions."
    },
    {
      question: "Even though the trade is happening for 1-2 bonds on the screen, there is quite a bit of variation in pricing",
      answer: "Small lot trades (1-2 bonds) on exchanges can show price variations due to low liquidity and wide bid-ask spreads. These trades may not represent fair market value. Institutional trades in larger quantities get better pricing due to economies of scale. We provide competitive pricing based on actual market depth and institutional rates."
    },
    {
      question: "How come we don't need the hard copies of KYC?",
      answer: "KYC processes are now digitized and linked with your PAN and Aadhaar through CERSAI and KRA (KYC Registration Agency). Once you complete KYC with any SEBI-registered intermediary, it's centrally recorded and can be verified electronically. This eliminates the need for physical document submission for subsequent transactions, making the process faster and paperless."
    },
    {
      question: "I want to invest in my wife's name but the Bank & Demat account is in my name",
      answer: "Bonds must be purchased in the name of the Demat account holder. If you want to invest in your wife's name, she needs to have her own Demat account. You can transfer funds from your bank account to her account, and she can then purchase bonds in her name. Alternatively, you can purchase bonds in your name and later transfer them to her Demat account (subject to applicable charges)."
    },
    {
      question: "In case I want to sell the security before the Maturity/Call, how can I sell?",
      answer: "You can sell bonds in the secondary market before maturity through your broker or directly on stock exchanges (BSE/NSE). We also facilitate secondary market transactions and can help you find buyers. The selling price will depend on prevailing market conditions, interest rates, and the bond's credit rating. Some bonds may have lower liquidity, which could affect pricing."
    },
    {
      question: "Will you buy the security back from me when I wish to liquidate it?",
      answer: "We facilitate secondary market transactions and can help you sell your bonds, subject to market conditions and availability of buyers. While we strive to provide liquidity support, we cannot guarantee buyback at all times or at specific prices. The actual selling price will depend on market demand, interest rates, and the bond's characteristics at that time."
    },
    {
      question: "Can an NRI invest in Bonds?",
      answer: "Yes, NRIs can invest in Indian bonds subject to RBI guidelines and FEMA regulations. NRIs need to have an NRE/NRO bank account, PIS (Portfolio Investment Scheme) account, and a Demat account. Certain bonds may have restrictions on NRI investments. We can guide you through the process and help identify suitable bonds for NRI investors."
    },
    {
      question: "What are the securities available for NRI?",
      answer: "NRIs can invest in Government Securities (G-Secs), Treasury Bills, Corporate Bonds, and certain listed bonds on stock exchanges. Some restrictions may apply based on RBI guidelines. Tax-free bonds and infrastructure bonds are popular among NRIs. We can provide a list of NRI-eligible securities and help with the investment process."
    },
    {
      question: "What is ICCL? And why do we transact on ICCL?",
      answer: "ICCL (Indian Clearing Corporation Limited) is the clearing and settlement arm of BSE. Transacting through ICCL ensures guaranteed settlement, reduces counterparty risk, and provides a transparent, regulated framework for bond transactions. It offers protection against default and ensures timely settlement of trades, making transactions safer for investors."
    },
    {
      question: "If I empanel as an IFA, how will I not allow my client to connect with Binary Capital directly? And vice-versa.",
      answer: "As an empaneled IFA (Independent Financial Advisor), we maintain strict client confidentiality and channel discipline. Your clients will be tagged to you in our system, and all communications will be routed through you. We have policies in place to ensure that direct client contact is avoided, protecting your relationship and ensuring you receive appropriate commissions for your clients' transactions."
    },
    {
      question: "As an IFA, I want that the security should be credited into my clients directly, but I don't want the name Binary Capital to go to my client, how do we work around that?",
      answer: "Securities are credited directly to your client's Demat account. While the transaction statement from the exchange/depository will show the executing broker details, we can work with you on client communication and documentation to maintain your brand presence. We can discuss white-labeling options and co-branding arrangements for your business requirements."
    },
    {
      question: "How long will the KYC process take?",
      answer: "Digital KYC can be completed within 24-48 hours if all documents are in order. If you're already KYC-compliant with any SEBI-registered intermediary, the verification is instant. Physical KYC may take 3-5 working days. We assist you throughout the process to ensure quick completion."
    },
    {
      question: "What all documents are required for the KYC?",
      answer: "Required documents include: PAN Card (mandatory), Aadhaar Card, Address Proof (if different from Aadhaar), Bank Account Details (cancelled cheque or bank statement), Passport-size photograph, and Income Proof (for certain categories). For corporate investors, additional documents like incorporation certificate, board resolution, and authorized signatory details are needed."
    },
    {
      question: "How often does the pricing go Up/Down basis of the bond market graph?",
      answer: "Bond prices fluctuate based on interest rate movements, credit rating changes, and market sentiment. Government bond prices change daily based on RBI policy and market conditions. Corporate bond prices are less volatile but can change based on company performance and credit outlook. Longer-duration bonds are more sensitive to interest rate changes than shorter-duration bonds."
    },
    {
      question: "Can I purchase a security in my name and then transfer to my client? If so, how do I show the transacting in my books?",
      answer: "Yes, you can purchase bonds in your name and transfer them to your client's Demat account through off-market transfer. The transaction should be recorded as a sale in your books at the agreed price. You'll need to execute a transfer deed and pay applicable stamp duty and transfer charges. Proper documentation and invoicing should be maintained for tax and audit purposes."
    },
    {
      question: "Can I purchase the security in my Demat account and transfer it to my Wife/Daughter/Son?",
      answer: "Yes, you can transfer securities to family members through off-market transfer or gift deed. For gifts to family members, you need to execute a gift deed and pay applicable stamp duty. The transfer will be processed through your Depository Participant (DP). Note that gift transactions may have tax implications, and it's advisable to consult a tax advisor."
    },
    {
      question: "The other companies are offering the security at a cheaper price",
      answer: "Bond pricing can vary based on transaction size, settlement terms, and included charges. Lower prices may not include all costs like brokerage, GST, stamp duty, and DP charges. We provide transparent, all-inclusive pricing. Please compare the final yield-to-maturity (YTM) and total cost rather than just the face value price. We're committed to competitive pricing and can discuss your specific requirements."
    },
    {
      question: "I want to invest but I don't have a Demat account. Can you please help me open a Demat account?",
      answer: "Yes, we can assist you in opening a Demat account with our partner depositories and brokers. The process is simple and can be completed online. We'll guide you through the documentation and help you choose the right account type based on your investment needs. The account opening typically takes 3-5 working days."
    },
    {
      question: "Can I open a Demat account with Binary Capital?",
      answer: "Binary Capital partners with leading depositories and brokers for Demat account services. We can facilitate the account opening process with our banking partner, The Federal Bank Limited, or other SEBI-registered depositories. We'll help you choose the best option based on your requirements and provide complete support throughout the process."
    },
    {
      question: "My Demat account is with Groww (CDSL). My client has a Demat account in NSDL. If I purchase the security in my Demat and then sell it to my client, can it be transferred from CDSL to NSDL Demat account?",
      answer: "Yes, securities can be transferred between CDSL and NSDL Demat accounts seamlessly. Both depositories are interconnected, and inter-depository transfers are routine. You'll need to initiate an off-market transfer through your DP, and the securities will be credited to your client's NSDL account. Standard transfer charges and processing time (T+2 days) apply."
    },
    {
      question: "I have already purchased the security but it does not reflect in my Demat account when I check it online.",
      answer: "Bond settlements typically take T+1 or T+2 days (trade date plus 1-2 working days). If the settlement date hasn't arrived, the securities won't show in your account yet. Also, check if you're looking at the correct Demat account and ISIN. If the settlement date has passed and securities are still not credited, please contact us immediately with your trade details for resolution."
    },
    {
      question: "Although the IP date was yesterday, the interest is still not credited in my account. Could you please speak to the issuer and get back to me.",
      answer: "Interest payments (IP - Interest Payment) are credited on the IP date, but the actual credit to your bank account may take 1-2 working days due to banking processes. Also, if the IP date falls on a bank holiday or weekend, the credit will be processed on the next working day. Please check your bank statement after 2-3 working days. If still not credited, we'll follow up with the issuer's RTA (Registrar and Transfer Agent)."
    },
    {
      question: "What is the SHUT PERIOD?",
      answer: "The shut period (also called record date closure or book closure) is the period during which the transfer of bonds is temporarily suspended to determine the list of eligible bondholders for interest payment or redemption. During this period, you cannot buy or sell the bond in a way that changes ownership for that particular payment. This ensures the issuer knows exactly who should receive the interest payment."
    },
    {
      question: "When is the SHUT PERIOD for a specific security?",
      answer: "The shut period dates are announced by the issuer in advance and are typically 7-15 days before the interest payment or redemption date. You can find this information in the bond's term sheet, on the stock exchange website, or by contacting us. We proactively inform our clients about upcoming shut periods for their holdings."
    },
    {
      question: "Could you please share the IM/Term sheet of the ISIN?",
      answer: "Yes, we can provide the Information Memorandum (IM) and Term Sheet for any bond you're interested in. These documents contain detailed information about the bond including issuer details, credit rating, coupon rate, maturity date, payment terms, and risk factors. Please share the ISIN or bond name, and we'll send you the complete documentation."
    },
    {
      question: "Can I sell the bond directly on BSE/NSE? If YES, how?",
      answer: "Yes, you can sell bonds directly on BSE/NSE if you have a trading account with a broker. You need to place a sell order through your trading platform, similar to selling stocks. However, bond liquidity on exchanges can be low, and you may not get the best price. We recommend using our secondary market services for better pricing and execution."
    },
    {
      question: "Who can I sell to?",
      answer: "You can sell bonds to any eligible buyer in the secondary market - including retail investors, HNIs, institutional investors, mutual funds, insurance companies, and banks. We have a wide network of potential buyers and can help you find the right counterparty for your bonds, ensuring competitive pricing and smooth execution."
    },
    {
      question: "Do you have a screen for monitoring the daily graph/pricing of bonds?",
      answer: "We provide regular updates on bond prices and market movements to our clients. You can also track bond prices on BSE/NSE websites using the ISIN. For comprehensive portfolio monitoring and market insights, we offer periodic reports and can provide access to bond market data platforms. Please contact your relationship manager for detailed market information."
    },
    {
      question: "Please suggest which security I should invest in?",
      answer: "Investment recommendations depend on your financial goals, risk appetite, investment horizon, and tax situation. We offer personalized advisory services where our experts analyze your requirements and suggest suitable bonds. Please schedule a consultation with our team, and we'll create a customized bond portfolio recommendation for you."
    },
    {
      question: "I am 54 years old and I want to invest in something secured, please advise",
      answer: "At 54, you're approaching retirement and should focus on capital preservation with steady income. We recommend a mix of high-rated corporate bonds (AAA/AA), government securities, and tax-free bonds. These provide regular income with lower risk. We can create a laddered bond portfolio with staggered maturities to ensure liquidity and stable returns. Let's discuss your specific financial goals and risk tolerance."
    },
    {
      question: "I am 74 years old and I don't know what bonds are, can you please explain and also tell me which bonds are suitable for me?",
      answer: "Bonds are like fixed deposits but issued by companies or government. You lend money and receive regular interest (like FD interest) plus your money back at maturity. At 74, you should focus on safety and regular income. We recommend government securities, PSU bonds, and AAA-rated corporate bonds with shorter maturities (2-5 years) for easy liquidity. We'll guide you through the entire process and help you invest safely."
    },
    {
      question: "I am a senior citizen, will I get a better coupon/yield?",
      answer: "Bond coupons are the same for all investors regardless of age. However, as a senior citizen, you may benefit from tax advantages on certain bonds and can structure your portfolio for regular income to supplement your pension. Some tax-free bonds and senior citizen savings schemes offer attractive returns. We can help you optimize your bond investments considering your senior citizen status and tax benefits."
    },
    {
      question: "Hypothetically, today I purchased a security deposit in my Demat account (single holder), tomorrow after I die, who will get this security? Can my family claim/transfer this security?",
      answer: "In case of the account holder's demise, the securities will be transmitted to the legal heirs/nominees as per the nomination registered in your Demat account. If you've added nominees, they can claim the securities by submitting the death certificate and necessary documents to your DP. If no nomination exists, legal heirs need to provide succession certificate or probate. We strongly recommend adding nominees to your Demat account to ensure smooth transmission to your family."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--navy))] dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get answers to common questions about bond investments, our services, and the investment process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border-l-4 border-[hsl(var(--golden))]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-lg font-semibold text-[hsl(var(--navy))] dark:text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[hsl(var(--golden))] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions? Our team is here to help.
          </p>
          <a href="/#contact">
            <button className="px-8 py-3 bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden-dark))] text-[hsl(var(--navy))] dark:text-black font-semibold rounded-lg transition-colors">
              Contact Our Experts
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
