"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Pin as Pinterest, 
  MessageCircle, 
  Zap, 
  CheckCircle2, 
  Globe, 
  ShoppingBag, 
  Smartphone, 
  ArrowRight,
  Sparkles,
  Play,
  TrendingUp,
  Image as ImageIcon,
  Calendar,
  Video,
  MousePointer2,
  PhoneCall,
  Download,
  CreditCard,
  Bitcoin,
  X,
  User,
  Mail,
  Phone
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const PLATFORMS = [
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    color: "bg-pink-500",
    plans: [
      { name: "Starter", price: "5,000", features: ["10 posts per month", "2 reels per month", "2 stories per month", "Basic graphics & captions", "Hashtag research", "Community management (48h)", "Monthly analytics"] },
      { name: "Growth", price: "12,000", featured: true, features: ["20 posts per month", "8 reels per month", "12 stories per month", "Custom graphics & reels", "Daily community management (24h)", "Hashtag strategy", "Monthly analytics + insights"] },
      { name: "Professional", price: "20,000", features: ["30 posts per month", "12 reels per month", "20 stories per month", "Premium content creation", "Real-time community management", "Influencer outreach support", "Detailed monthly analytics"] },
    ]
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: Facebook,
    color: "bg-blue-600",
    plans: [
      { name: "Starter", price: "4,500", features: ["10 posts per month", "2 videos per month", "2 stories per month", "Basic graphics & captions", "Community management (48h)", "Monthly analytics"] },
      { name: "Growth", price: "10,000", featured: true, features: ["20 posts per month", "6 videos per month", "12 stories per month", "Event promotion support", "Daily community management", "Facebook groups engagement", "Monthly analytics + insights"] },
      { name: "Professional", price: "18,000", features: ["30 posts per month", "10 videos per month", "20 stories per month", "Premium content creation", "Real-time community management", "Facebook ads consultation", "Detailed monthly analytics"] },
    ]
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: Music2Icon,
    color: "bg-black",
    plans: [
      { name: "Starter", price: "6,000", features: ["10 videos per month", "2 trending videos per month", "Trending audio research", "Hashtag optimization", "Community management (48h)", "Monthly analytics"] },
      { name: "Growth", price: "13,000", featured: true, features: ["20 videos per month", "6 trending challenge videos", "Trend analysis & participation", "Daily community management", "Content strategy", "Monthly analytics + insights"] },
      { name: "Professional", price: "22,000", features: ["30 videos per month", "10 trending challenge videos", "Advanced video editing", "Viral content strategy", "Real-time community management", "Influencer collaboration support", "Detailed monthly analytics"] },
    ]
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: Youtube,
    color: "bg-red-600",
    plans: [
      { name: "Starter", price: "10,000", features: ["4 videos per month", "4 YouTube Shorts", "Professional video editing", "SEO optimization", "4 Professional Thumbnails", "Growth Strategy", "Community management", "Monthly analytics"] },
      { name: "Growth", price: "20,000", featured: true, features: ["4 videos per month", "8 YouTube Shorts", "Professional video editing", "Advanced SEO optimization", "Custom thumbnails", "Playlist organization", "Daily community management", "Monthly analytics + growth strategy"] },
      { name: "Professional", price: "35,000", features: ["8 videos per month", "16 YouTube Shorts", "Premium video production", "Complete channel optimization", "End screens & cards setup", "Real-time community management", "Sponsorship consultation", "Detailed monthly analytics"] },
    ]
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: Linkedin,
    color: "bg-blue-700",
    plans: [
      { name: "Starter", price: "4,000", features: ["10 posts per month", "2 carousel posts", "Professional content writing", "Basic networking engagement", "Monthly analytics"] },
      { name: "Growth", price: "10,000", featured: true, features: ["20 posts per month", "6 carousel posts", "2 articles per month", "Active networking & engagement", "Connection request management", "Monthly analytics + insights"] },
      { name: "Professional", price: "18,000", features: ["30 posts per month", "10 carousel posts", "4 articles per month", "Thought leadership content", "Premium networking strategy", "LinkedIn ads consultation", "Detailed monthly analytics"] },
    ]
  },
  {
    id: "twitter",
    name: "Twitter / X",
    icon: Twitter,
    color: "bg-zinc-900",
    plans: [
      { name: "Starter", price: "3,500", features: ["30 tweets per month", "2 threads per month", "Hashtag research", "Community management (48h)", "Monthly analytics"] },
      { name: "Growth", price: "8,000", featured: true, features: ["60 tweets per month", "6 threads per month", "Daily community management", "Trending topics participation", "Monthly analytics + insights"] },
      { name: "Professional", price: "15,000", features: ["90 tweets per month", "12 threads per month", "Real-time engagement", "Twitter Spaces coordination", "Crisis management", "Detailed monthly analytics"] },
    ]
  },
  {
    id: "pinterest",
    name: "Pinterest",
    icon: Pinterest,
    color: "bg-red-500",
    plans: [
      { name: "Starter", price: "3,500", features: ["25 pins per month", "2 idea pins per month", "Board organization", "SEO optimization", "Monthly analytics"] },
      { name: "Growth", price: "8,000", featured: true, features: ["50 pins per month", "6 idea pins per month", "Custom pin designs", "Board strategy", "Monthly analytics + insights"] },
      { name: "Professional", price: "14,000", features: ["75 pins per month", "12 idea pins per month", "Premium pin designs", "Complete profile optimization", "Shopping integration", "Detailed monthly analytics"] },
    ]
  },
  {
    id: "extra",
    name: "Extra Services",
    icon: Sparkles,
    color: "bg-indigo-600",
    plans: [
      { name: "Content Strategy", price: "15,000", features: ["Brand voice definition", "Content pillar mapping", "Monthly content calendar", "Competitor analysis", "Monthly strategy review"] },
      { name: "Meta Ads Management", price: "20,000", features: ["Ad account setup", "A/B testing", "Conversion tracking", "Performance reporting", "Scaling strategy"] },
      { name: "Professional Shoot", price: "12,000", features: ["High-res photography", "Product styling", "Color grading", "20 edited photos", "Studio or on-site"] },
    ]
  }
];

function Music2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

export default function LandingPage() {
  const [selectedPackage, setSelectedPackage] = React.useState<any>(null);
  const [checkoutStep, setCheckoutStep] = React.useState(1);
  const [paymentMethod, setPaymentMethod] = React.useState<"mpesa" | "crypto" | null>(null);
  const [formData, setFormData] = React.useState({
    businessName: "",
    requirements: "",
    socialHandle: "",
    email: "",
    whatsapp: "",
    specifications: [] as string[],
    mpesaNumber: "",
    btcAddress: "",
  });

  const handleSelect = (pkg: any, platformName?: string) => {
    setSelectedPackage({ ...pkg, platform: platformName || "Bundle" });
    setCheckoutStep(1);
    setPaymentMethod(null);
  };

  const toggleSpecification = (spec: string) => {
    setFormData(prev => ({
      ...prev,
      specifications: prev.specifications.includes(spec) 
        ? prev.specifications.filter(s => s !== spec)
        : [...prev.specifications, spec]
    }));
  };

  const handleDownloadInvoice = () => {
    window.print();
  };

  const openWhatsApp = () => {
    const url = "https://wa.me/254759015580";
    window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
  };

  const isWebOrProfessional = selectedPackage?.platform === "Web Design" || selectedPackage?.name?.includes("Professional") || selectedPackage?.name?.includes("Complete") || selectedPackage?.name?.includes("Business Website") || selectedPackage?.name?.includes("E-Commerce");

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-500 selection:text-white dark:bg-zinc-950 dark:selection:bg-indigo-400">
      {/* Checkout Dialog */}
      <Dialog open={!!selectedPackage} onOpenChange={(open) => !open && setSelectedPackage(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-none shadow-2xl">
          {checkoutStep === 1 && (
            <div className="space-y-6">
              <DialogHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500 text-white mb-4">
                  <Sparkles className="h-6 w-6" />
                </div>
                <DialogTitle className="text-3xl font-black uppercase tracking-tight">Project Scope</DialogTitle>
                <DialogDescription className="text-base">
                  Tell us more about your business for the <span className="font-bold text-indigo-600 dark:text-indigo-400">{selectedPackage?.name}</span> package.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="text-xs font-bold uppercase tracking-wider opacity-60">Business Name</Label>
                  <Input 
                    id="businessName" 
                    placeholder="Enter your brand or business name" 
                    className="h-12 rounded-xl border-zinc-200 focus:ring-indigo-500"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  />
                </div>

                {isWebOrProfessional && (
                  <div className="space-y-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                    <Label className="text-xs font-bold uppercase tracking-wider opacity-60">Select Specifications (Optional)</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Modern Minimalist", "Bold & Vibrant", "Luxury/Premium", "Corporate", "Interactive/Animated", "E-commerce Ready", "Blog Integration", "Custom Illustrations"].map((spec) => (
                        <button
                          key={spec}
                          onClick={() => toggleSpecification(spec)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-all ${
                            formData.specifications.includes(spec)
                              ? "bg-indigo-500 border-indigo-500 text-white shadow-md shadow-indigo-500/20"
                              : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:border-indigo-300"
                          }`}
                        >
                          {formData.specifications.includes(spec) ? <CheckCircle2 className="h-3 w-3" /> : <div className="h-3 w-3 rounded-full border border-current opacity-20" />}
                          {spec}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="requirements" className="text-xs font-bold uppercase tracking-wider opacity-60">Specific Requirements</Label>
                  <Textarea 
                    id="requirements" 
                    placeholder="E.g. We focus on gen-z fashion, want a minimalist aesthetic..." 
                    className="min-h-[100px] rounded-xl border-zinc-200 focus:ring-indigo-500"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  />
                </div>
                <Button className="w-full h-14 rounded-2xl text-lg font-black uppercase tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => setCheckoutStep(2)}>
                  Next: Contact Info
                </Button>
              </div>
            </div>
          )}

          {checkoutStep === 2 && (
            <div className="space-y-6">
              <DialogHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500 text-white mb-4">
                  <User className="h-6 w-6" />
                </div>
                <DialogTitle className="text-3xl font-black uppercase tracking-tight">Contact & Socials</DialogTitle>
                <DialogDescription>How should we reach you and which accounts are we managing?</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="handle" className="text-xs font-bold uppercase tracking-wider opacity-60">Social Media Handle (Primary)</Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-zinc-400">@</span>
                    <Input 
                      id="handle" 
                      placeholder="yourhandle" 
                      className="h-12 pl-8 rounded-xl border-zinc-200 focus:ring-indigo-500"
                      value={formData.socialHandle}
                      onChange={(e) => setFormData({ ...formData, socialHandle: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider opacity-60">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="hello@brand.com" 
                      className="h-12 rounded-xl border-zinc-200 focus:ring-indigo-500"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-xs font-bold uppercase tracking-wider opacity-60">WhatsApp Number</Label>
                    <Input 
                      id="whatsapp" 
                      placeholder="+254..." 
                      className="h-12 rounded-xl border-zinc-200 focus:ring-indigo-500"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="flex-1 h-14 rounded-2xl border-2" onClick={() => setCheckoutStep(1)}>Back</Button>
                  <Button className="flex-[2] h-14 rounded-2xl text-lg font-black uppercase tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => setCheckoutStep(3)}>Continue to Payment</Button>
                </div>
              </div>
            </div>
          )}

          {checkoutStep === 3 && (
            <div className="space-y-6">
              <DialogHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500 text-white mb-4">
                  <CreditCard className="h-6 w-6" />
                </div>
                <DialogTitle className="text-3xl font-black uppercase tracking-tight">Payment Details</DialogTitle>
                <DialogDescription>Select your preferred payment method to proceed.</DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod("mpesa")}
                  className={`flex flex-col items-center justify-center gap-3 p-6 rounded-[2rem] border-2 transition-all ${
                    paymentMethod === "mpesa"
                      ? "bg-green-50 border-green-500 text-green-700"
                      : "bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 hover:border-green-200"
                  }`}
                >
                  <div className={`p-3 rounded-2xl ${paymentMethod === "mpesa" ? "bg-green-500 text-white" : "bg-zinc-100 dark:bg-zinc-800"}`}>
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <span className="font-bold uppercase tracking-wider text-xs">M-Pesa</span>
                </button>
                <button
                  onClick={() => setPaymentMethod("crypto")}
                  className={`flex flex-col items-center justify-center gap-3 p-6 rounded-[2rem] border-2 transition-all ${
                    paymentMethod === "crypto"
                      ? "bg-orange-50 border-orange-500 text-orange-700"
                      : "bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 hover:border-orange-200"
                  }`}
                >
                  <div className={`p-3 rounded-2xl ${paymentMethod === "crypto" ? "bg-orange-500 text-white" : "bg-zinc-100 dark:bg-zinc-800"}`}>
                    <Bitcoin className="h-6 w-6" />
                  </div>
                  <span className="font-bold uppercase tracking-wider text-xs">Bitcoin / BTC</span>
                </button>
              </div>

              {paymentMethod === "mpesa" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 p-6 rounded-3xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20">
                  <Label htmlFor="mpesaNumber" className="text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-400">M-Pesa Phone Number</Label>
                  <Input 
                    id="mpesaNumber" 
                    placeholder="07XX XXX XXX" 
                    className="h-12 rounded-xl border-green-200 focus:ring-green-500 bg-white dark:bg-zinc-900"
                    value={formData.mpesaNumber}
                    onChange={(e) => setFormData({ ...formData, mpesaNumber: e.target.value })}
                  />
                  <p className="text-[10px] font-medium text-green-600/70 uppercase">You will receive an STK push to complete the payment.</p>
                </motion.div>
              )}

              {paymentMethod === "crypto" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 p-6 rounded-3xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20">
                  <Label htmlFor="btcAddress" className="text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">Your BTC Address (For Refund/Tracking)</Label>
                  <Input 
                    id="btcAddress" 
                    placeholder="Enter your BTC wallet address" 
                    className="h-12 rounded-xl border-orange-200 focus:ring-orange-500 bg-white dark:bg-zinc-900"
                    value={formData.btcAddress}
                    onChange={(e) => setFormData({ ...formData, btcAddress: e.target.value })}
                  />
                  <div className="mt-4 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-orange-100 flex items-center gap-3">
                    <div className="flex-grow">
                      <p className="text-[10px] font-bold uppercase opacity-40 mb-1">Send Payment To</p>
                      <code className="text-[10px] break-all font-mono font-bold">bc1qxy2kgdy6jrsqtzq2n0yrf2493p83kkfjhx0wlh</code>
                    </div>
                    <Button size="icon" variant="ghost" className="shrink-0" onClick={() => navigator.clipboard.writeText("bc1qxy2kgdy6jrsqtzq2n0yrf2493p83kkfjhx0wlh")}>
                      <CheckCircle2 className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              <div className="flex gap-4 pt-4">
                <Button variant="outline" className="flex-1 h-14 rounded-2xl border-2" onClick={() => setCheckoutStep(2)}>Back</Button>
                <Button 
                  disabled={!paymentMethod}
                  className="flex-[2] h-14 rounded-2xl text-lg font-black uppercase tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50" 
                  onClick={() => setCheckoutStep(4)}
                >
                  Generate Final Invoice
                </Button>
              </div>
            </div>
          )}

          {checkoutStep === 4 && (
            <div className="space-y-6">
              <div id="invoice-capture" className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border-2 border-indigo-100 dark:border-indigo-900/30 shadow-xl shadow-indigo-500/5">
                <div className="flex justify-between items-start mb-10">
                  <div className="flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/20">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black uppercase tracking-tighter">BrandBoost</h2>
                      <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">Digital Solutions</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-zinc-300 dark:text-zinc-700">Invoice</h2>
                    <p className="text-[10px] font-bold text-zinc-400">#{Math.floor(100000 + Math.random() * 900000)}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-10 border-y py-8 border-zinc-100 dark:border-zinc-800">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-zinc-400 mb-3 tracking-widest">Client Details</p>
                    <p className="font-black text-lg leading-none mb-1">{formData.businessName || "Valued Client"}</p>
                    <p className="text-xs text-zinc-500 mb-0.5">{formData.email}</p>
                    <p className="text-xs text-zinc-500">{formData.whatsapp}</p>
                    {formData.socialHandle && <p className="text-[10px] mt-2 font-bold text-indigo-500">@{formData.socialHandle}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase text-zinc-400 mb-3 tracking-widest">Issue Date</p>
                    <p className="font-black text-lg leading-none">{new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                    <div className="mt-4 pt-4 border-t border-zinc-50 dark:border-zinc-800/50">
                      <p className="text-[10px] font-bold uppercase text-zinc-400 mb-1 tracking-widest">Payment Method</p>
                      <p className="text-xs font-bold uppercase text-indigo-600">{paymentMethod}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-center pb-6 border-b border-zinc-50 dark:border-zinc-800">
                    <div>
                      <p className="font-black uppercase text-base mb-1">{selectedPackage?.platform} - {selectedPackage?.name}</p>
                      <p className="text-xs text-zinc-400 font-medium">Complete service delivery for 30 days</p>
                      {formData.specifications.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {formData.specifications.map(s => (
                            <span key={s} className="text-[8px] font-black uppercase px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-full">{s}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-zinc-400 mb-1">Amount</p>
                      <p className="font-black text-xl">KES {selectedPackage?.price}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Notes</p>
                    <p className="text-[10px] font-medium text-zinc-500 max-w-[200px]">Service starts immediately after payment confirmation. T&C apply.</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black uppercase tracking-tighter opacity-40 mr-4">Grand Total Due</span>
                    <span className="text-4xl font-black tracking-tighter text-indigo-600">KES {selectedPackage?.price}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="h-14 rounded-[1.5rem] gap-2 border-2 hover:bg-zinc-50 dark:hover:bg-zinc-900" 
                  onClick={handleDownloadInvoice}
                >
                  <Download className="h-4 w-4" />
                  <span className="font-bold uppercase tracking-wider text-xs">PDF Copy</span>
                </Button>
                
                <Button className="h-14 rounded-[1.5rem] bg-indigo-600 hover:bg-indigo-700 text-white border-none gap-2 shadow-xl shadow-indigo-500/20">
                  <Zap className="h-4 w-4 fill-current" />
                  <span className="font-bold uppercase tracking-wider text-xs">Confirm Payment</span>
                </Button>
              </div>
              
              <p className="text-center text-[10px] text-zinc-500 uppercase font-black tracking-[0.2em] pt-4 border-t border-zinc-100 dark:border-zinc-800">
                Verified Digital Transaction
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Header */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/80">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[1.25rem] bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
              <Zap className="h-6 w-6 fill-current" />
            </div>
            <span className="text-xl font-black tracking-tighter">BRANDBOOST<span className="text-indigo-600">.KE</span></span>
          </div>
          <div className="hidden items-center gap-10 lg:flex">
            <a href="#services" className="text-xs font-black uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Management</a>
            <a href="#bundles" className="text-xs font-black uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Combo Plans</a>
            <a href="#websites" className="text-xs font-black uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Website Design</a>
            <a href="#faq" className="text-xs font-black uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Help</a>
            <Button size="sm" className="h-11 rounded-2xl px-8 font-black uppercase tracking-wider bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20" onClick={openWhatsApp}>Consult Now</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/5" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-pink-500/10 blur-[120px] dark:bg-pink-500/5" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-indigo-100 bg-indigo-50/50 px-5 py-2 text-indigo-700 backdrop-blur-md dark:border-indigo-900/30 dark:bg-indigo-900/20 dark:text-indigo-300">
              <Sparkles className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Kenya's Creative Powerhouse</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mx-auto max-w-5xl text-6xl font-black leading-[0.9] tracking-tighter md:text-[9.5rem]"
          >
            CRAFTING{" "}
            <motion.span 
              animate={{ 
                color: ["#4f46e5", "#ec4899", "#8b5cf6", "#4f46e5"],
                textShadow: [
                  "0 0 20px rgba(79,70,229,0)", 
                  "0 0 20px rgba(236,72,153,0.3)", 
                  "0 0 20px rgba(139,92,246,0.3)",
                  "0 0 20px rgba(79,70,229,0)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              ICONIC
            </motion.span>{" "}
            <br />
            <span className="inline-block relative">
              DIGITAL
              <div className="absolute -bottom-2 left-0 h-4 w-full bg-indigo-500/20 -rotate-1 rounded-full" />
            </span> BRANDS.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mt-12 max-w-2xl text-lg font-medium leading-relaxed text-zinc-500 dark:text-zinc-400 md:text-xl"
          >
            We don't just manage social media; we build legacies. High-impact content, professional web engineering, and strategic growth for the modern Kenyan business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <Button size="lg" className="h-16 rounded-[2rem] px-10 text-lg font-black uppercase tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xl shadow-indigo-500/40 transition-all hover:-translate-y-1">
              Explore Services
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 rounded-[2rem] border-2 border-zinc-200 px-10 text-lg font-black uppercase tracking-wider backdrop-blur-xl transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900" onClick={openWhatsApp}>
              WhatsApp Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Metrics/Icons Section */}
      <section className="py-20 border-y border-zinc-100 dark:border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-16">
            {[
              { label: "Accounts Managed", val: "250+", icon: User },
              { label: "Total Reach", val: "5.2M", icon: TrendingUp },
              { label: "Content Created", val: "12K+", icon: ImageIcon },
              { label: "Client ROI", val: "310%", icon: Zap },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-900">
                  <stat.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="text-3xl font-black tracking-tighter">{stat.val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section id="services" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 bg-indigo-500/5 blur-[100px] rounded-full" />
        <div className="container mx-auto px-6">
          <div className="mb-24 flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-indigo-600 text-white shadow-xl shadow-indigo-500/20">
              <Sparkles className="h-8 w-8" />
            </div>
            <h2 className="font-heading text-5xl font-black tracking-tighter md:text-7xl">PRECISION <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">MANAGEMENT</span></h2>
            <p className="mt-6 text-zinc-500 text-lg max-w-xl">Choose your primary theater of operations. We've optimized every tier for maximum conversions.</p>
          </div>

          <Tabs defaultValue="instagram" className="mx-auto w-full max-w-6xl">
            <TabsList className="mb-20 flex h-auto w-full flex-wrap justify-center gap-4 bg-transparent p-0">
              {PLATFORMS.map((platform) => (
                <TabsTrigger
                  key={platform.id}
                  value={platform.id}
                  className="group relative h-16 rounded-[1.5rem] border-2 border-zinc-100 px-8 data-[state=active]:border-indigo-600 data-[state=active]:bg-indigo-600 data-[state=active]:text-white dark:border-zinc-800 transition-all active:scale-95"
                >
                  <platform.icon className="mr-3 h-5 w-5" />
                  <span className="text-xs font-black uppercase tracking-widest">{platform.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {PLATFORMS.map((platform) => (
              <TabsContent key={platform.id} value={platform.id}>
                <div className="grid gap-10 md:grid-cols-3">
                  {platform.plans.map((plan, i) => (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className={`relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border-2 transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-2 dark:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] ${plan.featured ? "border-indigo-600 dark:border-indigo-400 shadow-2xl shadow-indigo-500/10" : "border-zinc-100 dark:border-zinc-800"}`}>
                        {plan.featured && (
                          <div className={`absolute top-0 right-0 rounded-bl-3xl px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white ${platform.color} shadow-lg shadow-black/10`}>
                            Growth Engine
                          </div>
                        )}
                        <CardHeader className="p-8">
                          <div className="flex justify-between items-start mb-6">
                            <div className="flex flex-col">
                              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-1">{platform.name}</span>
                              <CardTitle className="text-3xl font-black uppercase tracking-tighter">{plan.name}</CardTitle>
                            </div>
                            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${platform.color} text-white shadow-lg`}>
                              <platform.icon className="h-6 w-6" />
                            </div>
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">KES</span>
                            <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                            <span className="text-sm font-bold text-zinc-400">/MO</span>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow p-8 pt-0">
                          <Separator className="mb-8 opacity-50" />
                          <ul className="space-y-4">
                            {plan.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-4 text-sm font-medium">
                                <div className={`mt-0.5 rounded-full p-0.5 ${plan.featured ? "bg-indigo-100 text-indigo-600" : "bg-zinc-100 text-zinc-400"} dark:bg-zinc-800`}>
                                  <CheckCircle2 className="h-3.5 w-3.5" />
                                </div>
                                <span className="text-zinc-600 dark:text-zinc-400">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter className="p-8">
                          <Button 
                            className={`w-full h-16 rounded-[1.5rem] text-sm font-black uppercase tracking-widest transition-all active:scale-95 ${plan.featured ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-500/20" : "bg-zinc-100 text-black hover:bg-zinc-200 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"}`}
                            onClick={() => handleSelect(plan, platform.name)}
                          >
                            Select Plan
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Combo Plans Section - Refined for "Iconic" look */}
      <section id="bundles" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-24 flex flex-col items-center text-center">
            <Badge className="mb-6 bg-indigo-500 px-6 py-1.5 text-[10px] font-black uppercase tracking-[0.3em]">Efficiency Optimized</Badge>
            <h2 className="font-heading text-5xl font-black tracking-tighter md:text-7xl uppercase">HYPER-COMBO PLANS</h2>
            <p className="mt-6 text-zinc-400 text-lg max-w-2xl">Maximum dominance across multiple digital channels with reduced friction and higher savings.</p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              { 
                title: "Vanguard Duo", 
                discount: "15% SAVING", 
                price: "8,000", 
                original: "9,500", 
                gradient: "from-blue-600 to-indigo-600",
                features: ["Any 2 platforms", "20 posts total", "4 reels/videos", "4 stories per month"] 
              },
              { 
                title: "Trident Master", 
                discount: "20% SAVING", 
                price: "28,000", 
                original: "35,000", 
                featured: true,
                gradient: "from-indigo-600 to-purple-600",
                features: ["Any 3 platforms", "60 posts total", "20 videos/reels", "36 stories per month"] 
              },
              { 
                title: "Omni Suite", 
                discount: "25% SAVING", 
                price: "14,250", 
                original: "19,000", 
                gradient: "from-purple-600 to-pink-600",
                features: ["4 or more platforms", "40+ posts total", "8 reels/videos", "8 stories per month"] 
              },
            ].map((bundle, i) => (
              <motion.div
                key={bundle.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`group relative flex h-full flex-col border-none bg-zinc-900 p-2 transition-all hover:-translate-y-4 hover:shadow-[0_40px_100px_-20px_rgba(79,70,229,0.3)] ${bundle.featured ? "scale-105 z-10 ring-2 ring-indigo-500 shadow-2xl shadow-indigo-500/20" : ""}`}>
                  <div className={`h-2.5 rounded-t-3xl bg-gradient-to-r ${bundle.gradient}`} />
                  <CardHeader className="text-center pt-12 pb-8">
                    <span className="mb-6 inline-flex self-center rounded-full bg-white/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      {bundle.discount}
                    </span>
                    <CardTitle className="text-4xl font-black uppercase tracking-tighter text-white">{bundle.title}</CardTitle>
                    <div className="mt-4 flex items-center justify-center gap-3">
                      <span className="text-sm font-bold text-white/30 line-through tracking-wider">KES {bundle.original}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">KES</span>
                        <span className="text-3xl font-black text-white">{bundle.price}</span>
                        <span className="text-[10px] font-bold text-white/30">/MO</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow px-8 pb-12">
                    <ul className="space-y-5">
                      {bundle.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/60">
                          <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${bundle.gradient}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="px-8 pb-10">
                    <Button 
                      className={`h-16 w-full rounded-[1.5rem] text-xs font-black uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-95 ${bundle.featured ? "bg-white text-black hover:bg-zinc-100" : "bg-zinc-800 text-white hover:bg-zinc-700"}`} 
                      onClick={() => handleSelect({ name: bundle.title, price: bundle.price }, "Combo Plan")}
                    >
                      Deploy Plan
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Design Section - Visual overhaul */}
      <section id="websites" className="py-32 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-indigo-600 text-white">
                <Globe className="h-8 w-8" />
              </div>
              <h2 className="font-heading text-5xl font-black tracking-tighter md:text-7xl uppercase leading-none">HIGH-SPEED <br /> <span className="text-indigo-600">ENGINEERING.</span></h2>
              <p className="mt-8 text-zinc-500 text-lg">Next-gen web architecture for Kenyan businesses. Blazing fast load speeds, mobile perfection, and conversion-first logic.</p>
            </div>
            <div className="hidden lg:block pb-4">
              <Button variant="outline" className="h-14 rounded-2xl border-2 px-8 font-black uppercase tracking-widest">View Portfolio</Button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Landing Page", price: "12,000", features: ["Single scrolling page", "Mobile-responsive", "Contact form", "Social links", "1 year domain"] },
              { title: "Basic Website", price: "25,000", features: ["Up to 5 pages", "SEO optimized", "Contact form", "Social integration", "2 revisions"] },
              { title: "Business Site", price: "45,000", featured: true, features: ["Up to 8 pages", "Custom brand design", "Advanced SEO", "Blog engine", "3 revisions"] },
              { title: "E-Commerce", price: "65,000", features: ["Up to 30 products", "M-Pesa Gateway", "Inventory system", "Customer tracking", "Secure SSL"] },
            ].map((pkg, i) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`relative flex h-full flex-col rounded-[2.5rem] border-2 p-10 transition-all group-hover:-translate-y-2 ${pkg.featured ? "bg-zinc-950 text-white border-zinc-950 shadow-2xl dark:bg-indigo-600 dark:border-indigo-600" : "bg-white border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800"}`}>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">{pkg.title}</h3>
                  <div className="mb-10">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Investment starts at</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-sm font-bold opacity-40 uppercase">KES</span>
                      <span className="text-5xl font-black tracking-tighter">{pkg.price}</span>
                    </div>
                  </div>
                  <ul className="flex-grow space-y-5 mb-12">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-4 text-xs font-bold uppercase tracking-wider opacity-70">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-[-2px]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`h-16 w-full rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 ${pkg.featured ? "bg-white text-black hover:bg-zinc-100" : "bg-zinc-50 text-black hover:bg-zinc-100 dark:bg-zinc-800 dark:text-white"}`}
                    onClick={() => handleSelect({ name: pkg.title, price: pkg.price }, "Web Design")}
                  >
                    Initiate Build
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Combo Highlight */}
      <section id="combos" className="py-32 relative overflow-hidden bg-indigo-600 text-white">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="rounded-[4rem] bg-white p-12 lg:p-24 text-black flex flex-col lg:flex-row items-center gap-16 shadow-2xl">
            <div className="lg:w-1/2">
              <Badge className="bg-orange-500 hover:bg-orange-600 mb-8 px-6 py-2 text-sm font-black uppercase tracking-widest">Flash Bundle Offer</Badge>
              <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">E-COMMERCE <br /> <span className="text-indigo-600">STRIKE.</span></h2>
              <p className="text-lg font-medium text-zinc-500 mb-12 leading-relaxed">The ultimate weapon for retail dominance. Full management across IG/FB/TikTok plus a custom 30-product store with M-Pesa integration.</p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Package Value</p>
                  <p className="text-3xl font-black text-zinc-300 line-through">KES 110,000</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-2">Bundle Price</p>
                  <p className="text-5xl font-black text-indigo-600">KES 80,000</p>
                </div>
              </div>
              
              <Button size="lg" className="h-20 w-full lg:w-auto rounded-[2rem] px-12 text-xl font-black uppercase tracking-wider bg-black text-white hover:bg-zinc-900 shadow-2xl" onClick={() => handleSelect({ name: "E-Commerce Starter", price: "80,000" }, "Combo")}>
                Claim This Offer
              </Button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-[3rem] bg-zinc-100 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingBag className="h-48 w-48 text-indigo-100" />
                </div>
                {/* Visual Representation of the Bundle */}
                <div className="absolute bottom-10 left-10 right-10 bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-4">
                      <div className="h-10 w-10 rounded-full bg-pink-500 border-2 border-white flex items-center justify-center text-white"><Instagram className="h-5 w-5" /></div>
                      <div className="h-10 w-10 rounded-full bg-black border-2 border-white flex items-center justify-center text-white"><Music2Icon className="h-5 w-5" /></div>
                      <div className="h-10 w-10 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white"><Facebook className="h-5 w-5" /></div>
                    </div>
                    <span className="text-xs font-black uppercase">Social Suite</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-indigo-600/10 rounded-full overflow-hidden"><div className="h-full w-[85%] bg-indigo-600" /></div>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Inventory Management Ready</p>
                  </div>
                </div>
              </div>
              {/* Floating Accents */}
              <div className="absolute -top-6 -right-6 h-24 w-24 bg-orange-500 rounded-full flex items-center justify-center text-white font-black text-2xl -rotate-12 shadow-xl">SALE</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - "Iconic" high impact */}
      <section className="py-40">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-[4rem] bg-zinc-950 px-8 py-32 text-white dark:bg-white dark:text-black overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-large" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-large)" />
              </svg>
            </div>

            <h2 className="relative z-10 text-6xl lg:text-[9rem] font-black tracking-tighter uppercase leading-[0.8] mb-12">LEAVE YOUR <br /> <span className="text-indigo-500">MARK.</span></h2>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="h-20 w-full sm:w-auto rounded-full bg-indigo-600 px-12 text-xl font-black uppercase tracking-wider hover:bg-indigo-700 shadow-2xl shadow-indigo-500/40" onClick={openWhatsApp}>
                <MessageCircle className="mr-3 h-7 w-7 fill-current" />
                WhatsApp Us
              </Button>
              <Button size="lg" variant="outline" className="h-20 w-full sm:w-auto rounded-full border-2 border-white/20 px-12 text-xl font-black uppercase tracking-wider backdrop-blur-xl hover:bg-white/10 dark:border-black/20 dark:hover:bg-black/10" onClick={openWhatsApp}>
                Book a Strategy Call
              </Button>
            </div>
            
            <div className="mt-24 flex flex-wrap justify-center gap-12 opacity-20 grayscale hover:grayscale-0 transition-all">
              <Instagram className="h-10 w-10" />
              <Facebook className="h-10 w-10" />
              <Twitter className="h-10 w-10" />
              <Linkedin className="h-10 w-10" />
              <Youtube className="h-10 w-10" />
              <Pinterest className="h-10 w-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Minimal & Modern */}
      <footer className="py-20 border-t border-zinc-100 dark:border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
                  <Zap className="h-5 w-5 fill-current" />
                </div>
                <span className="text-xl font-black tracking-tighter uppercase">BrandBoost<span className="text-indigo-600">.KE</span></span>
              </div>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em]">Nairobi, Kenya • Digital First</p>
            </div>
            
            <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-zinc-400">
              <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Career</a>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">© 2024 BrandBoost Creative Agency</p>
              <p className="text-[10px] font-medium text-zinc-300 dark:text-zinc-800 mt-1 uppercase tracking-tighter">Designed for High Performance</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
