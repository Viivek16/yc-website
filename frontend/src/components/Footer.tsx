import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-[#333333] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start text-left w-full">
        
        {/* Main Structured Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 w-full mb-24">
          
          {/* Left Side: Headline, Body, CTA */}
          <div className="lg:col-span-5 flex flex-col items-start align-left">
            <h2 className="text-4xl sm:text-5xl font-gilmer font-bold text-white leading-tight mb-6 max-w-lg">
              Scale Your Token's Liquidity and Market Health.
            </h2>
            <p className="text-lg text-[#999999] font-metro leading-relaxed mb-10 max-w-md">
              Partner with Yellow Capital to access institutional-grade market making, programmatic treasury management, and strategic venture advisory.
            </p>
            <Button 
              size="lg" 
              className="bg-[#FCD000] text-black hover:bg-[#F8C200] font-gilmer font-semibold tracking-wide text-base min-w-[180px] h-14 rounded-none transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>

          <div className="lg:col-span-1 hidden lg:block" />

          {/* Right Side: Sitemap Links */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-12 font-metro pt-4">
            
            <div className="flex flex-col items-start">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-b border-[#333333] pb-2 w-full text-left">Services</h4>
              <ul className="flex flex-col gap-4 text-[#999999] text-sm items-start">
                <li><a href="#" className="hover:text-[#FCD000] transition-colors">Market Making</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors">OTC Trading</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors">Venture Capital</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors">Treasury Management</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-start">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-b border-[#333333] pb-2 w-full text-left">Company</h4>
              <ul className="flex flex-col gap-4 text-[#999999] text-sm items-start">
                <li><a href="#" className="hover:text-[#FCD000] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors">Insights & News</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors">Careers</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-start">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-b border-[#333333] pb-2 w-full text-left">Connect</h4>
              <ul className="flex flex-col gap-4 text-[#999999] text-sm items-start">
                <li><a href="#" className="hover:text-[#FCD000] transition-colors">Twitter (X)</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors">Telegram</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Banner */}
        <div className="w-full pt-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[#666666] text-xs font-metro">
          <p>© {new Date().getFullYear()} Yellow Capital. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
