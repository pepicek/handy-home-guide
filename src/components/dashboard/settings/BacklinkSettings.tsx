import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Award, LineChart, ArrowRight, BarChart3, Gift, Link as LinkIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const BacklinkSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Backlinks Program</CardTitle>
        <CardDescription>
          Boost your online presence and earn bonus points by participating in our backlinks program
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center p-3 border rounded-md bg-gray-50">
            <Globe className="h-5 w-5 text-yellow-600 mr-2" />
            <p className="text-sm">Improve your search engine rankings by adding YelloPago backlinks to your website</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-600" />
              Earn Monthly Bonus Points
            </h4>
            <p className="text-sm text-gray-600">
              Get rewarded with bonus points for participating in our crosslinking program. Points can be used to pay for YelloPago services.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium flex items-center gap-2">
              <LineChart className="h-5 w-5 text-yellow-600" />
              Free Traffic Analytics
            </h4>
            <p className="text-sm text-gray-600">
              Track your referral traffic with our built-in analytics. Monitor inbound and outbound clicks directly from your dashboard.
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="font-medium">Choose Your Backlink Style</h4>
            
            <div className="grid gap-4">
              <div className="p-4 border rounded-md">
                <h5 className="font-medium mb-3">Text Link</h5>
                <div className="bg-gray-50 p-3 rounded text-sm font-mono mb-3">
                  {`<a href="https://yellopago.com?ref=${'{YOUR_ID}'}" data-yp-track>Find Service Providers on YelloPago</a>`}
                </div>
                <div className="text-sm text-gray-600">
                  Preview: <a href="#" className="text-yellow-600 hover:underline">Find Service Providers on YelloPago</a>
                </div>
              </div>

              <div className="p-4 border rounded-md">
                <h5 className="font-medium mb-3">Small Icon</h5>
                <div className="bg-gray-50 p-3 rounded text-sm font-mono mb-3">
                  {`<a href="https://yellopago.com?ref=${'{YOUR_ID}'}" data-yp-track>
  <img src="https://yellopago.com/badge-small.png" alt="YelloPago Provider" width="88" height="31" />
</a>`}
                </div>
                <div className="text-sm text-gray-600">
                  Preview:
                  <div className="mt-2 inline-block border rounded px-2 py-1 bg-yellow-50">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold text-yellow-800">YelloPago</span>
                      <ArrowRight className="h-3 w-3 text-yellow-600" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-md">
                <h5 className="font-medium mb-3">Traffic Counter Badge</h5>
                <div className="bg-gray-50 p-3 rounded text-sm font-mono mb-3">
                  {`<a href="https://yellopago.com?ref=${'{YOUR_ID}'}" data-yp-track data-yp-counter>
  <img src="https://yellopago.com/badge-counter.png" alt="YelloPago Provider Stats" width="120" height="60" />
</a>`}
                </div>
                <div className="text-sm text-gray-600">
                  Preview:
                  <div className="mt-2 inline-block border rounded px-3 py-2 bg-gradient-to-r from-yellow-50 to-amber-50">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-yellow-600" />
                      <div className="text-xs">
                        <div className="font-semibold text-yellow-800">YelloPago Network</div>
                        <div className="text-yellow-600">1,234 visitors</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-md">
                <h5 className="font-medium mb-3">Premium Banner</h5>
                <div className="bg-gray-50 p-3 rounded text-sm font-mono mb-3">
                  {`<a href="https://yellopago.com?ref=${'{YOUR_ID}'}" data-yp-track>
  <img src="https://yellopago.com/banner.png" alt="Find Service Providers on YelloPago" width="468" height="60" />
</a>`}
                </div>
                <div className="text-sm text-gray-600">
                  Preview:
                  <div className="mt-2 border rounded p-4 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg">Find Local Service Providers</h3>
                        <p className="text-sm text-yellow-100">Trusted by thousands of customers</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gift className="h-6 w-6" />
                        <span className="font-semibold">Join YelloPago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="rounded-md bg-yellow-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <Award className="h-5 w-5 text-yellow-600" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Bonus Points Program</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Earn up to 500 bonus points monthly for active backlinks. Points can be used
                    towards premium features, listing upgrades, and service fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto" variant="outline">
          <LinkIcon className="mr-2 h-4 w-4" />
          Copy Your Referral ID
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BacklinkSettings;
