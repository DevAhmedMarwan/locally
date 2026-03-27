import React from 'react';

export default function PoliciesPage() {
  return (
    <div className="bg-[#0f141e] text-white min-h-screen !pt-8 !pb-24 font-sans flex flex-col items-center !px-4 md:!px-8">
      
      {/* Top Header */}
      <div className="text-left w-full max-w-4xl !mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white !mb-6 text-center">Policies</h1>
        <p className="text-gray-300 text-md md:text-lg leading-relaxed">
          At Locally, we are committed to providing you with a seamless shopping experience while maintaining the highest standards of service and customer satisfaction. This page outlines our comprehensive policies regarding returns, exchanges, shipping, privacy, and more. Please take a moment to review these policies to ensure you understand your rights and responsibilities as a valued customer.
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-8 text-left">
        
        {/* Return and Exchange Policy */}
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Return and Exchange Policy</h2>
          <div className="w-12 h-1 bg-[#2463eb] !mt-2 !mb-8"></div>
          
          {/* General Return Policy */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">General Return Policy</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              Our return and exchange policy is designed to ensure your complete satisfaction with every purchase. Items purchased online can be returned at any of our physical store locations, providing you with the convenience of returning items in person. However, please note that items purchased in-store cannot be returned through our online platform and must be returned to the physical store where the purchase was made.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              The return policy for online purchases is identical to our in-store return policy, ensuring consistency across all shopping channels. This unified approach allows you to shop with confidence, knowing that the same return standards apply regardless of where you make your purchase.
            </p>
          </div>

          {/* Return Window */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Return Window</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              You have 14 days from the date of delivery to return or exchange your items. This timeframe allows you to carefully inspect your purchase and ensure it meets your expectations. The 14-day period begins on the day your order is delivered to your specified address, as confirmed by our delivery tracking system.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              It is important to note that this return window applies to all eligible items and cannot be extended under normal circumstances. We recommend initiating your return as soon as possible if you are not satisfied with your purchase to ensure you remain within the return period.
            </p>
          </div>

          {/* Return Conditions */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Return Conditions</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              To be eligible for return or exchange, items must meet the following conditions:
            </p>
            <ul className="flex flex-col gap-2 !mb-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Items must be in new, unworn, and unwashed condition with all original tags attached</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Original packaging and labels must be intact and included with the return</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Items must not show any signs of wear, damage, or alteration</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Proof of purchase, such as a receipt or order confirmation, must be provided</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Items must be returned in their original condition, exactly as they were received</span>
              </li>
            </ul>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              Items that do not meet these conditions may be refused for return or may be subject to a restocking fee. We reserve the right to inspect all returned items to ensure they meet our return criteria.
            </p>
          </div>

          {/* In-Store Returns */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">In-Store Returns</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              Currently, we are working on implementing in-store pickup options for online orders. While this feature is being developed, you can return items purchased online at any of our physical store locations. Our store staff will be happy to assist you with the return process and ensure a smooth experience.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              When returning items to a store, please bring the original receipt or order confirmation email, along with the items in their original packaging. Our team will process your return immediately, and you can choose to receive a refund to your original payment method or exchange the items for something else.
            </p>
          </div>

          {/* Non-Returnable Items */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Non-Returnable Items</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              For hygiene and safety reasons, certain items cannot be returned or exchanged:
            </p>
            <ul className="flex flex-col gap-2 !mb-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Intimate apparel and undergarments</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Swimwear and beachwear</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Items marked as final sale or clearance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Gift cards and promotional items</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Items without original tags or packaging</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Items damaged by the customer</span>
              </li>
            </ul>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              Please carefully review product descriptions and sizing information before purchasing these items, as returns will not be accepted once the item has been worn or used.
            </p>
          </div>
        </div>

        {/* Shipping Policy */}
        <div className="flex flex-col !mt-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Shipping Policy</h2>
          <div className="w-12 h-1 bg-[#2463eb] !mt-2 !mb-8"></div>
          
          {/* Delivery Timeframes */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Delivery Timeframes</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              Standard delivery typically takes 3 to 5 working days from the time your order is processed and shipped. Delivery hours may vary depending on holidays, weekends, and peak shopping seasons. During special promotions or high-demand periods, delivery times may be slightly extended, but we will always keep you informed of any delays.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              We work with trusted shipping partners to ensure your orders arrive safely and on time. Once your order has been shipped, you will receive a tracking number via email that allows you to monitor your package's journey from our warehouse to your doorstep.
            </p>
          </div>

          {/* Shipping Locations */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Shipping Locations</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              We currently deliver throughout Egypt, including all major cities and regions. We are actively working on expanding our international shipping capabilities to serve customers worldwide. If you are located outside of Egypt, please check back regularly for updates on international shipping availability.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              For deliveries outside of Cairo, standard shipping times may vary slightly based on your location. Remote areas may require additional delivery time, and we will communicate any potential delays during the checkout process.
            </p>
          </div>

          {/* Shipping Fees */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Shipping Fees</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              Shipping fees are calculated based on your delivery location and the size and weight of your order. Standard delivery charges apply to most locations, with free shipping available on orders over a certain threshold. During checkout, you will see the exact shipping cost before completing your purchase.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              We occasionally offer promotional free shipping on select orders, which will be clearly indicated during the checkout process. These promotions are subject to terms and conditions and may have minimum order value requirements.
            </p>
          </div>

          {/* Order Processing */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Order Processing</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              Once you place an order, our team begins processing it immediately. Orders are typically processed within 1-2 business days, during which time we verify inventory, prepare your items for shipment, and generate shipping labels. You will receive email notifications at each stage of the process, keeping you informed every step of the way.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              During peak shopping seasons or sales events, processing times may be slightly longer due to increased order volume. We appreciate your patience during these busy periods and work diligently to process all orders as quickly as possible.
            </p>
          </div>

        </div>

        {/* Payment Policy */}
        <div className="flex flex-col !mt-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Payment Policy</h2>
          <div className="w-12 h-1 bg-[#2463eb] !mt-2 !mb-8"></div>
          
          {/* Accepted Payment Methods */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Accepted Payment Methods</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              We accept multiple payment methods to provide you with flexibility and convenience. You can pay for your orders using:
            </p>
            <ul className="flex flex-col gap-2 !mb-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Cash on Delivery (COD) - Available for most locations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Credit cards - All major credit cards are accepted</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Debit cards - Direct payment from your bank account</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Digital payment methods - Various online payment platforms</span>
              </li>
            </ul>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              All payment methods are processed securely through encrypted channels to protect your financial information. We never store your complete payment details on our servers, ensuring your privacy and security.
            </p>
          </div>

          {/* Pricing Consistency */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Pricing Consistency</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              We maintain consistent pricing across all our sales channels. The prices displayed on our website and mobile app are identical to those in our physical stores. This ensures transparency and allows you to shop with confidence, knowing that you are getting the same great prices whether you shop online or in-store.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              All prices are displayed in Egyptian Pounds (EGP) and include applicable taxes. Any discounts or promotions will be clearly indicated and automatically applied during checkout.
            </p>
          </div>

          {/* Refund Processing */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Refund Processing</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              When a return is approved, refunds are processed to your original payment method. Refunds typically take 5-10 business days to appear in your account, depending on your bank or payment provider. For cash on delivery orders, refunds will be processed through an alternative method, and our customer service team will contact you to arrange the refund.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              You will receive an email confirmation once your refund has been processed. If you do not see the refund in your account after 10 business days, please contact our customer service team for assistance.
            </p>
          </div>
        </div>

        {/* Privacy and Data Protection */}
        <div className="flex flex-col !mt-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Privacy and Data Protection</h2>
          <div className="w-12 h-1 bg-[#2463eb] !mt-2 !mb-8"></div>
          
          {/* Information Collection */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Information Collection</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              We collect information necessary to process your orders, provide customer service, and improve your shopping experience. This includes personal information such as your name, email address, phone number, shipping address, and payment information. We only collect information that is relevant and necessary for these purposes.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              Additionally, we may collect non-personal information such as browsing patterns, device information, and website usage data to enhance our services and provide you with personalized recommendations and offers.
            </p>
          </div>

          {/* Data Security */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Data Security</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              We take data security seriously and implement industry-standard security measures to protect your personal information. All data transmission is encrypted using secure socket layer (SSL) technology, and we regularly update our security protocols to address emerging threats.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              Your payment information is processed through secure payment gateways that comply with international security standards. We do not store complete credit card numbers or sensitive payment information on our servers.
            </p>
          </div>

          {/* Information Usage */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Information Usage</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              We use your information to process orders, communicate with you about your purchases, send promotional offers (with your consent), and improve our services. We do not sell or rent your personal information to third parties for their marketing purposes.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              We may share your information with trusted service providers who assist us in operating our website, conducting business, or serving you, such as shipping companies and payment processors. These partners are contractually obligated to maintain the confidentiality of your information.
            </p>
          </div>

          {/* Your Rights */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Your Rights</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              You have the right to access, update, or delete your personal information at any time. You can manage your account information through your profile settings or by contacting our customer service team. You also have the right to opt-out of marketing communications while still receiving essential order-related messages.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              If you have any concerns about how we handle your personal information or wish to exercise your rights, please contact us through our customer service channels, and we will be happy to assist you.
            </p>
          </div>
        </div>

        {/* Terms of Service */}
        <div className="flex flex-col !mt-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Terms of Service</h2>
          <div className="w-12 h-1 bg-[#2463eb] !mt-2 !mb-8"></div>
          
          {/* Account Responsibility */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Account Responsibility</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              When you create an account with Locally, you are responsible for maintaining the confidentiality of your account credentials, including your password. You agree to accept responsibility for all activities that occur under your account.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              If you suspect any unauthorized access to your account, please notify us immediately and change your password. We are not liable for any loss or damage arising from your failure to protect your account information.
            </p>
          </div>

          {/* Product Availability */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Product Availability</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              We strive to maintain accurate inventory information, but occasionally items may be out of stock or unavailable. If an item you ordered becomes unavailable, we will notify you as soon as possible and offer alternatives or a full refund.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              Product descriptions, images, and prices are subject to change without notice. While we make every effort to ensure accuracy, we reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Intellectual Property</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of Locally or its content suppliers and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              The Locally name, logo, and all related marks are trademarks of Locally and may not be used without our prior written consent.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Limitation of Liability</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              To the fullest extent permitted by law, Locally shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services, even if we have been advised of the possibility of such damages.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              Our total liability to you for any claims arising from your use of our services shall not exceed the amount you paid for the products in question.
            </p>
          </div>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col !mt-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Customer Service</h2>
          <div className="w-12 h-1 bg-[#2463eb] !mt-2 !mb-8"></div>
          
          {/* Contacting Support */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Contacting Support</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              Our customer service team is dedicated to providing you with exceptional support. If you have any questions, concerns, or need assistance with your order, you can reach us through multiple channels:
            </p>
            <ul className="flex flex-col gap-2 !mb-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Contact Us page on our website - Submit a detailed inquiry form</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Mobile App - Navigate to Profile <span className="text-gray-400">→</span> Contact Support to fill out our support form</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Email - Send us an email at our customer service address</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">WhatsApp - Chat with us directly for instant support</span>
              </li>
            </ul>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              We aim to respond to all inquiries within 1-2 business days. For urgent matters, we recommend using our WhatsApp support channel for faster response times.
            </p>
          </div>

          {/* Order Tracking */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Order Tracking</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              You can track your order status through our mobile app by navigating to Profile <span className="text-gray-400">→</span> My Orders <span className="text-gray-400">→</span> Track Order. This feature provides real-time updates on your order's progress, from processing to delivery.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              You will also receive email notifications at key stages of your order, including order confirmation, shipping confirmation, and delivery confirmation. These emails contain important information and tracking details to keep you informed throughout the process.
            </p>
          </div>

          {/* Order Modifications */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Order Modifications</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              Once an order is placed, it cannot be edited or modified. However, you can cancel your order at any time before the package status changes to "Picked up" through our mobile app. After this point, the order is in transit and cannot be cancelled.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              If you need to make changes to your order, please contact our customer service team as soon as possible. While we cannot guarantee that changes can be made, we will do our best to accommodate your request if the order has not yet been processed for shipment.
            </p>
          </div>
        </div>

        {/* Loyalty and Rewards Program */}
        <div className="flex flex-col !mt-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Loyalty and Rewards Program</h2>
          <div className="w-12 h-1 bg-[#2463eb] !mt-2 !mb-8"></div>
          
          {/* Earning Points */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Earning Points</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              Every time you place an order with Locally, you earn loyalty points that can be redeemed for discounts on future purchases. Points are automatically credited to your account after your order is confirmed and processed. The number of points earned is typically based on the total value of your purchase.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              Points can be accumulated over time and used to unlock various discount levels. The more you shop, the more points you earn, and the greater the rewards you can enjoy.
            </p>
          </div>

          {/* Point Redemption */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Point Redemption</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              You can redeem your accumulated points for discounts when shopping online. Points can be applied during checkout, and the discount will be automatically calculated and applied to your order total. The redemption value and minimum point requirements may vary, and current redemption rates will be displayed in your account.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              Points can only be redeemed online and cannot be used for in-store purchases. However, points earned from both online and in-store purchases can be accumulated in your account.
            </p>
          </div>

          {/* Point Expiration */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Point Expiration</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              Your loyalty points do not expire, giving you the flexibility to accumulate points over time and redeem them when it's most convenient for you. There's no pressure to use your points immediately, and you can save them for larger purchases or special occasions.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              This policy ensures that you can fully benefit from our loyalty program without worrying about losing your hard-earned points. However, we reserve the right to modify this policy with advance notice, though any such changes would not affect points already earned.
            </p>
          </div>
        </div>

        {/* Brand Availability */}
        <div className="flex flex-col !mt-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Brand Availability</h2>
          <div className="w-12 h-1 bg-[#2463eb] !mt-2 !mb-8"></div>
          
          {/* Online and In-Store Consistency */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Online and In-Store Consistency</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              All brands available on our mobile app are also available in our physical stores. This ensures consistency across all shopping channels and allows you to find the same great brands whether you prefer shopping online or visiting us in person.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              However, please note that not all brands available in our physical stores are necessarily available on our website. We continuously work to expand our online inventory to include more brands and products, but some items may be exclusive to our physical locations.
            </p>
          </div>

          {/* Product Selection */}
          <div className="!mb-8">
            <h3 className="text-xl font-bold text-white !mb-3">Product Selection</h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              While we strive to offer a comprehensive selection of products online, the inventory available on our website may differ from what is available in stores. Some products may be available in-store but not online, and vice versa, due to inventory management and availability constraints.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              If you're looking for a specific product or brand that you don't see online, we encourage you to visit one of our physical stores or contact our customer service team, who can help you locate the item or provide information about its availability.
            </p>
          </div>
        </div>

        {/* Policy Updates */}
        <div className="flex flex-col !mt-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Policy Updates</h2>
          <div className="w-12 h-1 bg-[#2463eb] !mt-2 !mb-8"></div>
          
          <div className="!mb-8">
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              We reserve the right to update, modify, or change these policies at any time to reflect changes in our business practices, legal requirements, or customer needs. When we make significant changes to our policies, we will notify you through email or prominent notices on our website.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              It is your responsibility to review these policies periodically to stay informed about how we protect your information and what your rights and responsibilities are. Your continued use of our services after any policy changes constitutes acceptance of those changes.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              The "Last Updated" date at the bottom of this page indicates when these policies were last revised. We encourage you to check this page regularly to stay informed about our current policies and practices.
            </p>
          </div>
        </div>

        {/* Questions About Our Policies? */}
        <div className="flex flex-col !mt-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Questions About Our Policies?</h2>
          <div className="w-12 h-1 bg-[#2463eb] !mt-2 !mb-8"></div>
          
          <div className="!mb-8">
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              If you have any questions, concerns, or need clarification about any of our policies, please don't hesitate to contact our customer service team. We are here to help and ensure you have a clear understanding of our policies and procedures.
            </p>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mb-4">
              You can reach us through:
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Our Contact Us page on the website</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Customer support form in the mobile app</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">Email support</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md md:text-lg leading-relaxed">WhatsApp chat</span>
              </li>
            </ul>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed !mt-6">
              Our team is committed to providing you with accurate information and addressing any concerns you may have. We value your feedback and use it to continuously improve our policies and services.
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <div className="w-full border-t border-gray-700/50 !pt-8 !mt-8 text-center !pb-8">
          <p className="text-gray-400 text-sm md:text-md">Last Updated: March 28, 2026</p>
        </div>

      </div>
    </div>
  );
}