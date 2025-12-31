import { ArrowRight, Mail } from "lucide-react"
import { useMemo } from "react"
import { websiteUrl } from "~/config"
import { getTranslationForLocale } from "~/i18n/ui"

type MenuSheetProps = {
	locale: string
}

export default function Footer({ locale }: MenuSheetProps) {
const ui = useMemo(() => getTranslationForLocale(locale), [locale])
  return (
    <footer className="w-full bg-white px-6 py-12 md:px-12 lg:px-24 text-[#1a1a1a]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Customer Service */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg">{ui["footer.customerService"]}</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href={`${websiteUrl}/collections/necklaces`} className="hover:text-black transition-colors">
                {ui["footer.shippingInformation"]}
              </a>
            </li>
            <li>
              <a href={`${websiteUrl}/collections/necklaces`} className="hover:text-black transition-colors">
                {ui["footer.returnsExchanges"]}
              </a>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg">{ui["footer.information"]}</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="/#assistant" className="hover:text-black transition-colors">
                {ui["footer.atelierAssistant"]}
              </a>
            </li>
          </ul>
        </div>

        {/* Service */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg">{ui["footer.service"]}</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href={`${websiteUrl}/collections/rings`} className="hover:text-black transition-colors">
                {ui["footer.ourStory"]}
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:text-black transition-colors">
                {ui["footer.aboutUs"]}
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl leading-tight">{ui["footer.getInTouch"]}</h2>
          <p className="text-sm text-gray-500 max-w-xs">{ui["footer.newsletterText"]}</p>
<form id="subscribe-form" method="POST" action="/api/subscribe" >
          <div className="relative flex items-center border border-gray-200 rounded-sm overflow-hidden p-3 max-w-md">
            <Mail className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="email"
              placeholder={ui["footer.emailPlaceholder"]}
              className="w-full outline-none text-sm placeholder:text-gray-300"
            />
            <button 	id="subscribe-btn"
					type="submit" className="cursor-pointer text-gray-400 hover:text-black transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          </form>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-400 order-2 md:order-1">{ui["footer.copyright"]}</p>
        <div className="flex gap-3 order-1 md:order-2">
            <img src="https://store.cyodesign.com/cdn/shop/files/Group_2.png?v=1761742050"/>
      
          {/* <div className="w-10 h-6 bg-gray-100 rounded-sm flex items-center justify-center text-[8px] font-bold text-gray-400">
            MASTER
          </div>
          <div className="w-10 h-6 bg-gray-100 rounded-sm flex items-center justify-center text-[8px] font-bold text-gray-400">
            VISA
          </div>
          <div className="w-10 h-6 bg-gray-100 rounded-sm flex items-center justify-center text-[8px] font-bold text-gray-400">
            AMEX
          </div>
          <div className="w-10 h-6 bg-gray-100 rounded-sm flex items-center justify-center text-[8px] font-bold text-gray-400">
            APPLE
          </div>
          <div className="w-10 h-6 bg-gray-100 rounded-sm flex items-center justify-center text-[8px] font-bold text-gray-400">
            PAY
          </div> */}
        </div>
      </div>
    </footer>
  )
}
