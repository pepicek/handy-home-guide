
import React from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRight, Check, Home, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const formSchema = z.object({
  reason: z.enum(["find_provider", "compare_services", "get_quotes", "other"]),
  usage: z.array(z.string()).nonempty("Please select at least one option"),
  otherInfo: z.string().optional(),
});

const VisitorQuestionnaire = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reason: "find_provider",
      usage: [],
      otherInfo: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Thank you for completing the questionnaire!");
    navigate("/"); // Navigate to homepage or dashboard
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-yellow-500 w-8 h-8 flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div className="text-gray-400">Registration Complete</div>
                <div className="h-1 w-8 bg-gray-300"></div>
                <div className="rounded-full bg-yellow-100 w-8 h-8 flex items-center justify-center text-yellow-600 font-medium">2</div>
                <div className="text-gray-900 font-medium">Quick Questions</div>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h1 className="text-2xl font-bold text-anthracite mb-6 text-center">
                  Help us personalize your experience
                </h1>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="reason"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>What's your main reason for using YelloPago today?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="space-y-2"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                  <RadioGroupItem value="find_provider" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer flex-1">
                                  Find a service provider for a specific need
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                  <RadioGroupItem value="compare_services" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer flex-1">
                                  Compare services and prices
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                  <RadioGroupItem value="get_quotes" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer flex-1">
                                  Get quotes for a project
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                  <RadioGroupItem value="other" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer flex-1">
                                  Other reason
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="usage"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Will you be using YelloPago for:</FormLabel>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="usage"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes("personal")}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, "personal"])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== "personal"
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                      <FormLabel className="font-normal cursor-pointer flex items-center">
                                        <Home className="h-4 w-4 mr-2" />
                                        Personal projects
                                      </FormLabel>
                                    </div>
                                  </FormItem>
                                )
                              }}
                            />
                            <FormField
                              control={form.control}
                              name="usage"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes("business")}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, "business"])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== "business"
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                      <FormLabel className="font-normal cursor-pointer flex items-center">
                                        <Briefcase className="h-4 w-4 mr-2" />
                                        Business sourcing
                                      </FormLabel>
                                    </div>
                                  </FormItem>
                                )
                              }}
                            />
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="otherInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Anything else you'd like us to know? (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your specific needs or projects..."
                              className="resize-none h-24"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <div className="pt-4 space-x-3 flex justify-end">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => navigate("/")}
                      >
                        Skip for now
                      </Button>
                      <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-anthracite">
                        Complete
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VisitorQuestionnaire;
