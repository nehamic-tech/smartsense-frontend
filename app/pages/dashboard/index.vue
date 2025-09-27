<script setup lang="ts">
definePageMeta({
  requiresAuth: true,
});

const authStore = useAuthStore();
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-6">
      Dashboard
    </h1>

    <div v-if="!authStore.isInitialized" class="text-gray-600">
      Loading...
    </div>

    <div v-else-if="authStore.isAuthenticated" class="space-y-4">
      <h2 class="text-xl">
        Welcome back!
      </h2>
      <div class="bg-gray-100 p-4 rounded-lg">
        <p><strong>Email:</strong> {{ authStore.user?.email }}</p>
        <p><strong>Name:</strong> {{ authStore.user?.name }} {{ authStore.user?.lastName }}</p>
        <p><strong>Tenant:</strong> {{ authStore.user?.slug }}</p>
        <p><strong>Tier:</strong> {{ authStore.user?.tier }}</p>
        <p><strong>Account ID:</strong> {{ authStore.user?.accountId }}</p>
        <p><strong>Tenant ID:</strong> {{ authStore.user?.tenantId }}</p>
      </div>

      <button
        class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        @click="authStore.logout">
        Logout
      </button>
    </div>

    <div v-else class="text-red-600">
      Not authenticated - redirecting...
    </div>
  </div>
</template>
