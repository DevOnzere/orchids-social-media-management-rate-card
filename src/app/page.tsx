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

// ... (PLATFORMS and Music2Icon definitions)

export default function LandingPage() {
  const [selectedPackage, setSelectedPackage] = React.useState<any>(null);
  const [checkoutStep, setCheckoutStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    businessName: "",
    requirements: "",
    socialHandle: "",
    email: "",
    whatsapp: "",
  });

  const handleSelect = (pkg: any, platformName?: string) => {
    setSelectedPackage({ ...pkg, platform: platformName || "Bundle" });
    setCheckoutStep(1);
  };

  const handleDownloadInvoice = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white dark:bg-zinc-950 dark:selection:bg-white dark:selection:text-black">
      {/* Checkout Dialog */}
      <Dialog open={!!selectedPackage} onOpenChange={(open) => !open && setSelectedPackage(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {checkoutStep === 1 && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black uppercase">Service Details</DialogTitle>
                <DialogDescription>
                  Tell us more about your business for the <span className="font-bold text-black">{selectedPackage?.name}</span> package.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input 
                    id="businessName" 
                    placeholder="Enter your brand or business name" 
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requirements">Specific Requirements / Target Audience</Label>
                  <Textarea 
                    id="requirements" 
                    placeholder="E.g. We focus on gen-z fashion, want a minimalist aesthetic..." 
                    className="min-h-[100px]"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  />
                </div>
                <Button className="w-full h-12 rounded-xl text-lg font-bold" onClick={() => setCheckoutStep(2)}>
                  Next: Contact Info
                </Button>
              </div>
            </div>
          )}

          {checkoutStep === 2 && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black uppercase">Contact & Socials</DialogTitle>
                <DialogDescription>How should we reach you and which accounts are we managing?</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="handle">Social Media Handle (Primary)</Label>
                  <Input 
                    id="handle" 
                    placeholder="@yourhandle" 
                    value={formData.socialHandle}
                    onChange={(e) => setFormData({ ...formData, socialHandle: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="hello@brand.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <Input 
                      id="whatsapp" 
                      placeholder="+254..." 
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="flex-1 h-12 rounded-xl" onClick={() => setCheckoutStep(1)}>Back</Button>
                  <Button className="flex-[2] h-12 rounded-xl text-lg font-bold" onClick={() => setCheckoutStep(3)}>Generate Invoice</Button>
                </div>
              </div>
            </div>
          )}

          {checkoutStep === 3 && (
            <div className="space-y-6">
              <div id="invoice-capture" className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl border-2 border-zinc-200 dark:border-zinc-800">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-tighter">Invoice</h2>
                    <p className="text-sm text-zinc-500">#{Math.floor(100000 + Math.random() * 900000)}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1 mb-1">
                      <Zap className="h-4 w-4 fill-black dark:fill-white" />
                      <span className="font-black text-sm">BRANDBOOST KE</span>
                    </div>
                    <p className="text-[10px] text-zinc-500">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8 border-y py-6 border-zinc-200 dark:border-zinc-800">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-zinc-400 mb-2">Billed To</p>
                    <p className="font-bold">{formData.businessName || "Valued Client"}</p>
                    <p className="text-xs text-zinc-500">{formData.email}</p>
                    <p className="text-xs text-zinc-500">{formData.whatsapp}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase text-zinc-400 mb-2">Date</p>
                    <p className="font-bold">{new Date().toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-4 border-b border-zinc-100 dark:border-zinc-800">
                    <div>
                      <p className="font-bold uppercase text-sm">{selectedPackage?.platform} - {selectedPackage?.name}</p>
                      <p className="text-xs text-zinc-500">Monthly management package</p>
                    </div>
                    <p className="font-black">KES {selectedPackage?.price}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-black uppercase">Total Due</span>
                  <span className="text-3xl font-black">KES {selectedPackage?.price}</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full h-12 rounded-xl gap-2 border-2" 
                  onClick={handleDownloadInvoice}
                >
                  <Download className="h-4 w-4" />
                  Download PDF Invoice
                </Button>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button className="h-14 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white border-none gap-2">
                    <Smartphone className="h-5 w-5" />
                    Pay via M-Pesa
                  </Button>
                  <Button className="h-14 rounded-xl bg-orange-500 hover:bg-orange-600 text-white border-none gap-2">
                    <Bitcoin className="h-5 w-5" />
                    Pay with Crypto
                  </Button>
                </div>
                
                <p className="text-center text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
                  Secure checkout powered by BrandBoost
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Header */}
      <nav className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
              <Zap className="h-6 w-6" />
            </div>
            <span className="font-heading text-xl font-bold tracking-tight">BRANDBOOST KE</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">Services</a>
            <a href="#bundles" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">Bundles</a>
            <a href="#websites" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">Websites</a>
            <a href="#faq" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">FAQ</a>
            <Button size="sm" className="rounded-full px-6">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(0,0,0,0.05)_0%,rgba(255,255,255,0)_100%)] dark:bg-[radial-gradient(45%_45%_at_50%_50%,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_100%)]" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <Badge variant="outline" className="rounded-full border-black/10 bg-black/5 px-4 py-1 text-black dark:border-white/10 dark:bg-white/5 dark:text-white">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Social Media & Web Design Experts in Kenya
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading mx-auto max-w-4xl text-5xl font-black leading-[1.1] tracking-tighter md:text-8xl"
          >
            DOMINATE THE <span className="italic underline decoration-black/20 dark:decoration-white/20">DIGITAL</span> LANDSCAPE.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 md:text-xl"
          >
            Unbeatable social media management, content creation, and website design packages tailored for Kenyan businesses. More posts, more growth, more value.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="h-14 rounded-full px-8 text-lg font-semibold">
              View Our Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 rounded-full border-2 px-8 text-lg font-semibold">
              Book Free Consultation
            </Button>
          </motion.div>
        </div>
        
        {/* Floating Elements (Visual Decoration) */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-[25%] hidden rounded-2xl border bg-white p-4 shadow-xl dark:border-zinc-800 dark:bg-zinc-900 md:block"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-pink-100 p-2 dark:bg-pink-900/30">
              <Instagram className="h-5 w-5 text-pink-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-500">Instagram Growth</p>
              <p className="text-sm font-bold">+124% Engagement</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] hidden rounded-2xl border bg-white p-4 shadow-xl dark:border-zinc-800 dark:bg-zinc-900 md:block"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
              <Facebook className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-500">Facebook Reach</p>
              <p className="text-sm font-bold">15k New Views</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Tabs */}
      <section id="services" className="border-t py-24 dark:border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight md:text-6xl">INDIVIDUAL PLATFORMS</h2>
            <p className="mt-4 text-zinc-500">Choose the perfect tier for your favorite platform</p>
          </div>

          <Tabs defaultValue="instagram" className="mx-auto w-full max-w-6xl">
            <TabsList className="mb-12 flex h-auto w-full flex-wrap justify-center gap-2 bg-transparent p-0">
              {PLATFORMS.map((platform) => (
                <TabsTrigger
                  key={platform.id}
                  value={platform.id}
                  className="rounded-full border border-black/5 px-6 py-3 data-[state=active]:bg-black data-[state=active]:text-white dark:border-white/5 dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  <platform.icon className="mr-2 h-4 w-4" />
                  {platform.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {PLATFORMS.map((platform) => (
              <TabsContent key={platform.id} value={platform.id}>
                <div className="grid gap-8 md:grid-cols-3">
                  {platform.plans.map((plan, i) => (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className={`relative flex h-full flex-col overflow-hidden border-2 transition-all hover:shadow-2xl hover:-translate-y-1 ${plan.featured ? "border-black dark:border-white shadow-lg" : "border-zinc-100 dark:border-zinc-800"}`}>
                        {plan.featured && (
                          <div className={`absolute top-0 right-0 rounded-bl-xl px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white ${platform.color}`}>
                            Most Popular
                          </div>
                        )}
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                            <platform.icon className={`h-8 w-8 ${platform.color} rounded-xl p-1.5 text-white shadow-lg`} />
                          </div>
                          <div className="flex items-baseline gap-1 pt-2">
                            <span className="text-sm font-semibold text-zinc-500">KES</span>
                            <span className="text-4xl font-black tracking-tight">{plan.price}</span>
                            <span className="text-sm text-zinc-500">/mo</span>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <ul className="space-y-4">
                            {plan.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-3 text-sm">
                                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-black dark:text-white" : "text-zinc-400"}`} />
                                <span className="text-zinc-600 dark:text-zinc-400 font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button 
                            className={`w-full h-12 rounded-xl font-bold uppercase tracking-tight transition-all active:scale-95 ${plan.featured ? "" : "bg-zinc-50 text-black hover:bg-zinc-100 border-2 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"}`}
                            onClick={() => handleSelect(plan, platform.name)}
                          >
                            Select {plan.name}
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

      {/* Bundles Section */}
      <section id="bundles" className="bg-zinc-50 py-24 dark:bg-zinc-900/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight md:text-6xl">SAVE MORE WITH BUNDLES</h2>
            <p className="mt-4 text-zinc-500 text-lg max-w-2xl mx-auto">Mix and match platforms for massive discounts. Perfect for brands that want a 360° digital presence.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { 
                title: "2 Platforms", 
                discount: "15% OFF", 
                price: "8,000", 
                original: "9,500", 
                color: "from-blue-500 to-cyan-400",
                features: ["Choose any 2 platforms", "20 posts total", "4 reels/videos", "4 stories per month"] 
              },
              { 
                title: "3 Platforms", 
                discount: "20% OFF", 
                price: "28,000", 
                original: "35,000", 
                featured: true,
                color: "from-purple-600 to-pink-500",
                features: ["Choose any 3 platforms", "60 posts total", "20 videos/reels", "36 stories per month"] 
              },
              { 
                title: "4+ Platforms", 
                discount: "25% OFF", 
                price: "14,250", 
                original: "19,000", 
                color: "from-orange-500 to-yellow-400",
                features: ["4 or more platforms", "40+ posts total", "8 reels/videos", "8 stories per month"] 
              },
            ].map((bundle, i) => (
              <motion.div
                key={bundle.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`relative flex h-full flex-col border-none bg-white p-2 dark:bg-zinc-950 transition-all hover:shadow-2xl ${bundle.featured ? "shadow-2xl ring-2 ring-black dark:ring-white scale-105 z-10" : "shadow-xl"}`}>
                  <div className={`h-2 rounded-t-xl bg-gradient-to-r ${bundle.color}`} />
                  <CardHeader className="text-center pt-8">
                    <div className={`mb-4 inline-flex self-center rounded-full px-4 py-1 text-xs font-bold text-white bg-gradient-to-r ${bundle.color}`}>
                      {bundle.discount}
                    </div>
                    <CardTitle className="font-heading text-3xl">{bundle.title}</CardTitle>
                    <CardDescription className="mt-2 flex items-center justify-center gap-2">
                      <span className="line-through opacity-50 text-sm">KES {bundle.original}</span>
                      <span className="text-2xl font-black text-black dark:text-white">KES {bundle.price}/mo</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pt-4">
                    <ul className="space-y-4 px-4">
                      {bundle.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-zinc-900 dark:text-zinc-100" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pb-8">
                    <Button 
                      className={`w-full rounded-xl py-6 text-lg font-bold uppercase tracking-wider ${bundle.featured ? "" : "bg-zinc-100 text-black hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white"}`} 
                      variant={bundle.featured ? "default" : "ghost"}
                      onClick={() => handleSelect({ name: bundle.title, price: bundle.price })}
                    >
                      Get This Bundle
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Content Creation & A La Carte */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-4xl font-bold tracking-tight">CONTENT CREATION ONLY</h2>
              <p className="mt-4 text-zinc-500">Perfect for businesses who manage their own accounts but need quality visuals.</p>
              
              <div className="mt-10 space-y-4">
                {[
                  { label: "10 Graphics Pack", price: "3,000" },
                  { label: "20 Graphics Pack", price: "5,000" },
                  { label: "30 Graphics Pack", price: "7,000" },
                  { label: "10 Captions Pack", price: "2,000" },
                  { label: "5 Reels/TikTok Videos", price: "8,000" },
                  { label: "Monthly Content Calendar (30 days)", price: "4,000" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between border-b pb-4 dark:border-zinc-800">
                    <span className="font-medium">{item.label}</span>
                    <span className="font-black">KES {item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-4xl font-bold tracking-tight">À LA CARTE SERVICES</h2>
              <p className="mt-4 text-zinc-500">Custom solutions for specific needs. Scale your strategy exactly how you want it.</p>
              
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  { icon: ImageIcon, title: "Extra Post", price: "500", desc: "Any platform" },
                  { icon: Video, title: "Extra Reel/TikTok", price: "1,500", desc: "High engagement" },
                  { icon: TrendingUp, title: "Social Audit", price: "3,000", desc: "Per platform" },
                  { icon: Calendar, title: "Strategy Session", price: "5,000", desc: "1-hour deep dive" },
                  { icon: PhoneCall, title: "Monthly Consult", price: "4,000", desc: "Stay on track" },
                  { icon: MousePointer2, title: "Landing Page", price: "8,000", desc: "Conversion focused" },
                ].map((service) => (
                  <div key={service.title} className="rounded-2xl border p-4 transition-colors hover:border-black dark:border-zinc-800 dark:hover:border-white">
                    <service.icon className="mb-3 h-6 w-6 opacity-60" />
                    <p className="text-sm font-bold">{service.title}</p>
                    <p className="text-xs text-zinc-500">{service.desc}</p>
                    <p className="mt-2 font-black text-sm">KES {service.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Design Section */}
      <section id="websites" className="bg-black py-24 text-white dark:bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight md:text-6xl">WEBSITE DESIGN & HOSTING</h2>
            <p className="mt-4 text-zinc-400">Mobile-responsive, SEO-ready, and high-converting</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Landing Page", price: "12,000", features: ["Single scrolling page", "Mobile-responsive", "Contact form", "Social media links", "1 revision"] },
              { title: "Basic Website", price: "25,000", features: ["Up to 5 pages", "Mobile-responsive", "Basic SEO", "Contact form", "2 revisions"] },
              { title: "Business Site", price: "45,000", featured: true, features: ["Up to 8 pages", "Custom brand design", "Advanced SEO", "Blog functionality", "Newsletter integration"] },
              { title: "E-Commerce", price: "65,000", features: ["Up to 30 products", "M-Pesa/Card/PayPal", "Inventory management", "Order tracking", "Mobile-friendly checkout"] },
            ].map((pkg, i) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`flex h-full flex-col rounded-3xl border border-white/10 p-8 ${pkg.featured ? "bg-white text-black dark:bg-white dark:text-black" : "bg-white/5"}`}>
                  <h3 className="font-heading text-2xl font-bold">{pkg.title}</h3>
                  <div className="mt-4 mb-8">
                    <span className="text-sm opacity-60">Starting at</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold uppercase tracking-widest">KES</span>
                      <span className="text-4xl font-black">{pkg.price}</span>
                    </div>
                  </div>
                  <ul className="flex-grow space-y-4 text-sm">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2 className={`h-5 w-5 shrink-0 ${pkg.featured ? "text-black" : "text-white"}`} />
                        <span className="opacity-80">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`mt-10 w-full rounded-full ${pkg.featured ? "bg-black text-white hover:bg-zinc-800" : "bg-white text-black hover:bg-zinc-100"}`}
                    onClick={() => handleSelect({ name: pkg.title, price: pkg.price }, "Web Design")}
                  >
                    Choose Plan
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-12">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div>
                <h3 className="font-heading text-3xl font-bold">Premium E-Commerce</h3>
                <p className="mt-2 text-zinc-400">Unlimited products, multi-vendor support, and 3 months free support.</p>
              </div>
              <div className="text-center lg:text-right">
                <span className="text-sm font-bold uppercase tracking-widest opacity-60">One-time Investment</span>
                <div className="flex items-baseline justify-center gap-1 lg:justify-end">
                  <span className="text-sm font-bold">KES</span>
                  <span className="text-5xl font-black tracking-tight">120,000</span>
                </div>
                <Button className="mt-6 w-full rounded-full bg-white text-black hover:bg-zinc-100 lg:w-auto px-8" size="lg">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combo Packages */}
      <section id="combos" className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-zinc-50 dark:bg-zinc-900/50" />
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Special Limited Offer</Badge>
            <h2 className="font-heading text-4xl font-bold tracking-tight md:text-6xl">SPECIAL COMBO PACKAGES</h2>
            <p className="mt-4 text-zinc-500 text-lg max-w-2xl">The ultimate digital launchpads. We've combined our best services to give you the highest possible value at a fraction of the cost.</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {[
              { 
                title: "Starter Digital", 
                price: "15,000", 
                saving: "Save KES 7,500", 
                icon: Smartphone,
                features: ["Any 2 platforms (Starter tier)", "20 posts + 4 reels/videos", "Landing page website", "1 year domain (.com)", "3 months hosting FREE"]
              },
              { 
                title: "Business Growth", 
                price: "35,000", 
                saving: "Save KES 15,000", 
                icon: TrendingUp,
                featured: true,
                features: ["Any 3 platforms (Growth tier)", "60 posts + 20 videos/reels", "Basic website (5 pages)", "Professional email (1 account)", "6 months hosting FREE"]
              },
              { 
                title: "Complete Business", 
                price: "60,000", 
                saving: "Save KES 25,000", 
                icon: Zap,
                features: ["Any 3 platforms (Professional tier)", "90 posts + 32 videos/reels", "Business website (8 pages)", "Professional email (3 accounts)", "1 year hosting FREE", "Monthly strategy session"]
              },
              { 
                title: "E-Commerce Starter", 
                price: "80,000", 
                saving: "Save KES 30,000", 
                icon: ShoppingBag,
                features: ["Instagram + Facebook + TikTok (Growth)", "60 posts + 20 videos total", "E-Commerce website (30 products)", "M-Pesa integration", "1 year hosting FREE", "Product photography (10 products)"]
              },
            ].map((combo, i) => (
              <motion.div
                key={combo.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-[2.5rem] border-2 p-8 md:p-12 ${combo.featured ? "border-black bg-white dark:border-white dark:bg-zinc-950 shadow-2xl" : "border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-950"}`}
              >
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                  <div className="flex-grow">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-zinc-100 dark:bg-zinc-800">
                      <combo.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-heading text-3xl font-bold">{combo.title}</h3>
                    <p className="mt-2 text-sm font-black text-orange-600 uppercase tracking-widest">{combo.saving}</p>
                    
                    <ul className="mt-8 space-y-4">
                      {combo.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm font-medium">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-black dark:text-white" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                    <div className="flex flex-col items-center justify-center rounded-3xl bg-zinc-50 p-8 dark:bg-zinc-900 md:w-48">
                      <span className="text-xs font-bold text-zinc-500 uppercase">Package Price</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-xs font-bold uppercase">KES</span>
                        <span className="text-4xl font-black">{combo.price}</span>
                      </div>
                      <Button 
                        className="mt-6 w-full rounded-2xl font-black uppercase tracking-tighter" 
                        variant={combo.featured ? "default" : "outline"}
                        onClick={() => handleSelect({ name: combo.title, price: combo.price }, "Combo")}
                      >
                        Buy Now
                      </Button>
                    </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight md:text-6xl">FREQUENTLY ASKED QUESTIONS</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Can I change my package later?", a: "Yes! You can upgrade or downgrade at any time after the initial 3-month commitment." },
              { q: "What if I need to pause my service?", a: "We offer a 1-month pause option after completing 3 months of service." },
              { q: "Do you provide content or do I need to?", a: "We create all content for you! You just need to provide brand guidelines, product/service information, and any specific requirements." },
              { q: "How quickly can you start?", a: "We can start within 2-3 business days after payment and completing the onboarding process." },
              { q: "Do you sign contracts?", a: "Yes, all clients receive a service agreement outlining terms, deliverables, and expectations." },
              { q: "Can I see the content before it's posted?", a: "Absolutely! All content is shared for your approval 48 hours before scheduled posting." },
              { q: "What happens if I'm not satisfied?", a: "We offer unlimited revisions until you're happy with the content. Your satisfaction is our priority!" },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-zinc-200 dark:border-zinc-800">
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-zinc-500 text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="rounded-[3rem] bg-black px-8 py-20 text-center text-white dark:bg-white dark:text-black">
            <h2 className="font-heading text-4xl font-bold tracking-tight md:text-7xl">READY TO BOOST YOUR BRAND?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl opacity-70">Contact us today for a free consultation and let's build your digital presence together.</p>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button size="lg" className="h-16 rounded-full bg-white px-10 text-xl font-bold text-black hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800">
                <MessageCircle className="mr-3 h-6 w-6" />
                Chat on WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="h-16 rounded-full border-2 border-white/20 px-10 text-xl font-bold hover:bg-white/10 dark:border-black/20 dark:hover:bg-black/10">
                Book a Free Call
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40 grayscale">
              <Instagram className="h-8 w-8" />
              <Facebook className="h-8 w-8" />
              <Twitter className="h-8 w-8" />
              <Linkedin className="h-8 w-8" />
              <Youtube className="h-8 w-8" />
              <Pinterest className="h-8 w-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 dark:border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                <Zap className="h-4 w-4" />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight">BRANDBOOST KE</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-zinc-500">
              <a href="#" className="hover:text-black dark:hover:text-white">Terms</a>
              <a href="#" className="hover:text-black dark:hover:text-white">Privacy</a>
              <a href="#" className="hover:text-black dark:hover:text-white">Cookies</a>
            </div>
            <p className="text-sm text-zinc-500">© 2024 BrandBoost KE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
