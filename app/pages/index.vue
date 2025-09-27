<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const miniLinks = [
  { name: "About us", href: "#" },
  { name: "Press", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Legal", href: "#" },
  { name: "Support", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Sitemap", href: "#" },
  { name: "Cookie settings", href: "#" },
];
const links = {
  products: {
    items: [
      {
        name: "Blog",
        description: "The latest industry news, updates and info.",
        icon: "lucide:book",
        href: "#",
      },
      {
        name: "About us",
        description: "The latest industry news, updates and info.",
        icon: "lucide:info",
        href: "#",
      },
      {
        name: "Video tutorials",
        description: "All the information you need to know about our platform.",
        icon: "lucide:play-circle",
        href: "#",
      },
      {
        name: "Customer stories",
        description: "See how our customers use our platform to grow their business.",
        icon: "lucide:sparkle",
        href: "#",
      },
      {
        name: "Help center",
        description: "Get all your questions answered in our help center.",
        icon: "lucide:life-buoy",
        href: "#",
      },
    ],
  },
  resources: {
    items: [
      {
        name: "About us",
        description: "The latest industry news, updates and info.",
        icon: "lucide:info",
        href: "#",
      },
      {
        name: "Customer stories",
        description: "See how our customers use our platform to grow their business.",
        icon: "lucide:sparkle",
        href: "#",
      },
      {
        name: "Video tutorials",
        description: "All the information you need to know about our platform.",
        icon: "lucide:play-circle",
        href: "#",
      },
      {
        name: "Help center",
        description: "Get all your questions answered in our help center.",
        icon: "lucide:life-buoy",
        href: "#",
      },
      {
        name: "Blog",
        description: "The latest industry news, updates and info.",
        icon: "lucide:book",
        href: "#",
      },
    ],
  },
};
const COMPANY_NAME = "SmartSense";

const features = [
  {
    icon: "heroicons:chat-bubble-left-right",
    title: "Share team inboxes",
    description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    link: { text: "Learn more", url: "#" },
  },
  {
    icon: "heroicons:bolt",
    title: "Deliver instant answers",
    description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    link: { text: "Learn more", url: "#" },
  },
  {
    icon: "heroicons:cursor-arrow-rays",
    title: "Manage your team with reports",
    description: `Measure what matters with ${COMPANY_NAME}easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.`,
    link: { text: "Learn more", url: "#" },
  },
  {
    icon: "heroicons:users",
    title: "Connect with customers",
    description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    link: { text: "Learn more", url: "#" },
  },
];
</script>

<template>
  <div>
    <header class="z-20 border-b bg-background/90 backdrop-blur">
      <UiContainer class="flex h-16 items-center justify-between lg:h-20">
        <div class="flex items-center gap-10">
          <NuxtLink to="#" class="flex items-center gap-3">
            <img
              src="/icon.png"
              fit="contain"
              alt="Company Logo"
              title="Company Logo"
              class="h-6 rounded object-contain lg:h-8">
            <span class="font-semibold lg:text-lg">SmartSense</span>
          </NuxtLink>
          <UiNavigationMenu as="nav" class="hidden items-center justify-start gap-8 lg:flex">
            <UiNavigationMenuList class="gap-2">
              <UiNavigationMenuItem>
                <UiNavigationMenuLink as-child>
                  <UiButton v-wave to="#" variant="ghost" size="sm">
                    Home
                  </UiButton>
                </UiNavigationMenuLink>
              </UiNavigationMenuItem>
              <template v-for="(data, link, i) in links" :key="i">
                <UiNavigationMenuItem>
                  <UiNavigationMenuTrigger class="h-9 px-3 text-sm capitalize" :title="link" />
                  <UiNavigationMenuContent>
                    <div class="lg:w-[750px] xl:w-[1000px]">
                      <template v-for="(item, cat, index) in data" :key="`${cat}-${index}`">
                        <ul class="grid w-full grid-cols-2 flex-col gap-2 xl:grid-cols-3">
                          <li v-for="(child, k) in item" :key="k">
                            <UiNavigationMenuLink class="data-[active]:bg-muted/80" as-child>
                              <NuxtLink
                                :to="child.href"
                                class="flex flex-row gap-4 rounded-md p-3 transition hover:bg-muted/80 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none dark:hover:bg-muted/20">
                                <div
                                  class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border shadow-xs">
                                  <Icon
                                    :name="child.icon"
                                    class="mt-px h-5 w-5 shrink-0 text-muted-foreground" />
                                </div>
                                <div class="flex flex-col gap-1.5 leading-none">
                                  <p class="text-sm font-semibold">
                                    {{ child.name }}
                                  </p>
                                  <p
                                    class="text-sm text-muted-foreground"
                                    v-html="child.description" />
                                </div>
                              </NuxtLink>
                            </UiNavigationMenuLink>
                          </li>
                        </ul>
                      </template>
                      <div
                        class="col-span-full flex items-center justify-center bg-muted/20 py-5 dark:bg-muted/5">
                        <NuxtLink class="font-semibold text-primary hover:underline" to="#">
                          Looking for a new career? Get in touch!
                        </NuxtLink>
                      </div>
                    </div>
                  </UiNavigationMenuContent>
                </UiNavigationMenuItem>
              </template>
              <UiNavigationMenuItem>
                <UiNavigationMenuLink as-child>
                  <UiButton to="#" variant="ghost" size="sm">
                    Pricing
                  </UiButton>
                </UiNavigationMenuLink>
              </UiNavigationMenuItem>
            </UiNavigationMenuList>
          </UiNavigationMenu>
        </div>
        <div class="lg:hidden">
          <UiSheet>
            <UiSheetTrigger as-child>
              <UiButton variant="ghost" size="icon-sm">
                <Icon name="lucide:menu" class="h-5 w-5" />
              </UiButton>
              <UiSheetContent class="w-[90%] p-0">
                <template #content>
                  <UiSheetTitle class="sr-only" title="Mobile menu" />
                  <UiSheetDescription class="sr-only" description="Mobile menu" />
                  <UiSheetX class="z-20" />

                  <UiScrollArea class="h-full p-5">
                    <div class="flex flex-col gap-2">
                      <UiButton variant="ghost" class="justify-start text-base" to="#">
                        Home
                      </UiButton>
                      <template v-for="(data, link, i) in links" :key="i">
                        <UiCollapsible>
                          <UiCollapsibleTrigger as-child>
                            <UiButton
                              variant="ghost"
                              class="w-full justify-start text-base capitalize *:data-[state=open]:-rotate-180"
                              to="#">
                              {{ link }}
                              <Icon name="lucide:chevron-down" class="ml-auto size-4 transition" />
                            </UiButton>
                          </UiCollapsibleTrigger>
                          <UiCollapsibleContent
                            class="data-[state=closed]:animate-none data-[state=open]:p-3 data-[state=open]:pt-0">
                            <div
                              v-for="(item, cat, index) in data"
                              :key="`${cat}-${index}`"
                              class="mt-5">
                              <ul class="flex w-full flex-col gap-2">
                                <li v-for="(child, k) in item" :key="k">
                                  <NuxtLink
                                    :to="child.href"
                                    class="flex flex-row gap-4 rounded-md py-3 transition hover:bg-muted/80 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none">
                                    <div
                                      class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border shadow-xs">
                                      <Icon
                                        :name="child.icon"
                                        class="mt-px h-5 w-5 shrink-0 text-muted-foreground" />
                                    </div>
                                    <div class="flex flex-col gap-1.5 leading-none">
                                      <p class="text-sm font-semibold">
                                        {{ child.name }}
                                      </p>
                                      <p
                                        class="text-sm text-muted-foreground"
                                        v-html="child.description" />
                                    </div>
                                  </NuxtLink>
                                </li>
                              </ul>
                            </div>
                          </UiCollapsibleContent>
                        </UiCollapsible>
                      </template>
                      <UiButton variant="ghost" class="justify-start text-base" to="#">
                        Pricing
                      </UiButton>

                      <UiGradientDivider class="my-5" />

                      <ul class="grid grid-cols-2 gap-x-3 gap-y-5 px-4">
                        <li v-for="(m, j) in miniLinks" :key="j">
                          <NuxtLink class="py-2" :to="m.href">
                            {{ m.name }}
                          </NuxtLink>
                        </li>
                      </ul>
                      <UiGradientDivider class="my-5" />
                      <UiButton to="#">
                        Sign up
                      </UiButton>
                      <UiButton variant="outline" to="#">
                        Log in
                      </UiButton>
                    </div>
                  </UiScrollArea>
                </template>
              </UiSheetContent>
            </UiSheetTrigger>
          </UiSheet>
        </div>
        <div class="hidden items-center gap-3 lg:flex">
          <UiColorModeButton />

          <UiButton v-wave to="/login" variant="ghost" size="default">
            Log in
          </UiButton>

          <UiButton v-wave to="/signup" size="default">
            Sign up
          </UiButton>
        </div>
      </UiContainer>
    </header>
    <main>
      <UiContainer class="flex flex-col gap-y-5 py-10 md:flex-row md:gap-10 md:py-0 lg:h-[720px]">
        <div class="flex h-full items-center justify-center md:w-2/3 xl:w-1/2">
          <div class="text-center md:text-left">
            <UiBadge
              to="#"
              variant="secondary"
              class="px-3 py-1.5 text-xs font-normal md:text-sm lg:py-2">
              We're hiring! Join our remote team <Icon class="ml-3 size-4" name="lucide:arrow-right" />
            </UiBadge>
            <h1 class="mt-7 mb-4 text-4xl font-bold md:text-5xl lg:mt-5 lg:mb-6 xl:text-6xl">
              People who care about your growth
            </h1>
            <p class="text-lg text-muted-foreground lg:text-xl">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain
              more.
            </p>
            <div class="mt-8 grid grid-cols-1 gap-3 md:flex lg:mt-12">
              <UiButton size="lg" variant="outline">
                <Icon name="lucide:play-circle" /> Demo
              </UiButton>
              <UiButton size="lg">
                Sign up
              </UiButton>
            </div>
            <p class="mt-5 text-sm text-muted-foreground">
              We care about your data in our privacy policy.
            </p>
          </div>
        </div>
        <div class="h-[350px] md:h-full md:w-1/3 xl:w-1/2">
          <img
            class="h-full w-full object-cover lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]"
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero section two styles"
            loading="eager"
            width="700"
            height="800"
            :title="`${COMPANY_NAME} hero section two header`">
        </div>
      </UiContainer>
      <UiContainer class="relative py-16 lg:py-24">
        <div class="max-w-[760px]">
          <p class="font-semibold text-primary">
            Features
          </p>
          <h2 class="mt-3 mb-4 text-3xl font-semibold lg:mb-5 lg:text-4xl">
            Overflowing with useful features
          </h2>
          <p class="max-w-[800px] text-lg text-balance text-muted-foreground lg:text-xl">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain
            more users. Trusted by over 4,000 startups.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-y-12 py-10 lg:grid-cols-2 lg:gap-x-10 lg:py-20">
          <div class="grid grid-cols-1 gap-y-10 lg:gap-8 lg:gap-y-12">
            <template v-for="(f, i) in features" :key="i">
              <div class="group flex gap-5">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border">
                  <Icon
                    :name="f.icon"
                    class="h-5 w-5 transition-colors group-hover:text-primary lg:h-5 lg:w-5" />
                </div>
                <div class="grow">
                  <h3 class="text-lg font-semibold lg:text-xl" v-text="f.title" />
                  <p
                    class="mt-1 max-w-[600px] text-muted-foreground lg:mt-2 lg:max-w-none"
                    v-text="f.description" />
                  <NuxtLink
                    class="mt-4 inline-block font-semibold text-primary underline-offset-2 hover:underline lg:mt-5"
                    :to="f.link.url">
                    {{ f.link.text }} <Icon name="heroicons:arrow-right" class="size-4" />
                  </NuxtLink>
                </div>
              </div>
            </template>
          </div>
          <div class="">
            <img
              src="https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Share team inboxes feature"
              class="h-[300px] w-full rounded-lg object-cover shadow-xs lg:h-full lg:max-h-[700px] lg:w-[590px]">
          </div>
        </div>
      </UiContainer>
    </main>
    <footer>
      <UiContainer as="footer" class="py-16 lg:py-24">
        <div class="flex flex-col justify-between gap-5 border-b pb-10 lg:flex-row lg:pb-16">
          <div>
            <p class="mb-3 text-lg font-semibold lg:text-xl">
              Join our newsletter
            </p>
            <p class="text-muted-foreground">
              We'll send you a nice letter once per week. No spam.
            </p>
          </div>
          <form class="flex flex-col gap-3 lg:flex-row lg:items-end">
            <div class="w-full lg:w-[70%]">
              <UiVeeInput required placeholder="Enter your email" aria-label="Enter your email" />
            </div>
            <div>
              <UiButton class="w-full whitespace-nowrap lg:w-auto" type="submit">
                Subscribe
              </UiButton>
            </div>
          </form>
        </div>
        <section class="mt-10 grid grid-cols-2 gap-8 lg:mt-16 lg:grid-cols-6">
          <template v-for="n in 6" :key="n">
            <div>
              <p class="mb-4 text-sm text-muted-foreground">
                Product
              </p>
              <ul class="flex flex-col gap-3">
                <li v-for="k in 6" :key="k">
                  <NuxtLink class="font-semibold hover:text-primary" to="#">
                    Link item {{ k }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </template>
        </section>

        <section class="mt-12 flex flex-col justify-between gap-5 border-t pt-8 lg:mt-16 lg:flex-row">
          <NuxtLink to="#" class="flex items-center gap-3">
            <img
              src="/icon.png"
              fit="contain"
              alt="Company Logo"
              title="Company Logo"
              class="h-6 object-contain lg:h-8">
            <span class="text-lg font-semibold">{{ COMPANY_NAME }}</span>
          </NuxtLink>
          <p class="text-muted-foreground">
            &copy; {{ new Date().getFullYear() }} {{ COMPANY_NAME }}. All rights reserved.
          </p>
        </section>
      </UiContainer>
    </footer>
  </div>
</template>
