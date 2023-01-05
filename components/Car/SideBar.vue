<script setup>
    const modal = ref({
        location: false,
        make: false,
        price: false
    });

    const route = useRoute();
    const router = useRouter();
    const { makes } = useCar();
    const city = ref('');
    const priceRange = ref({
        min: '',
        max: ''
    });
    const updateModal = (key) => {
        modal.value[key] = !modal.value[key];
    }
    const setLocationSearch = () => {
        if(!city.value) {
            return;
        }
        //check for invalid location input (pass number)
        if(!isNaN(parseInt(city.value))) {
            throw createError({
                statusCode: 400,
                message: "Invalid city format"
            });
        }
        updateModal('location');
        navigateTo(`/city/${city.value}/car/${route.params.make}`);
        city.value = '';
    }

    const setMakeSearch = (make) => {
        updateModal('make');
        navigateTo(`/city/${route.params.city}/car/${make}`);
    }

    //set price visualisation in search tool
    const setPriceRange = computed(() => {
        const minPrice = route.query.minPrice;
        const maxPrice = route.query.maxPrice;

        if (!minPrice && !maxPrice) {
            return "Any";
        } else if (!minPrice && maxPrice) {
            return `< $${maxPrice}`;
        } else if (minPrice && !maxPrice) {
            return `> $${minPrice}`;
        } else {
          return `$${minPrice}-$${maxPrice}`;
        }
    });

    const setPriceSearch = () => {
        updateModal('price');
        if (priceRange.value.min && priceRange.value.max) {
            if (priceRange.value.min > priceRange.value.max) {
                return;
            }
        }
        router.push({
            query: {
                minPrice: priceRange.value.min,
                maxPrice: priceRange.value.max
            }
        })
    };
</script>

<template>
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">

<!--      LOCATION -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location </h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('location')"> {{ route.params.city }}</h3>
        <div v-if="modal.location" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
            <input type="text" class="border p-1 rounded" v-model="city" />
            <button @click="setLocationSearch" class="bg-blue-400 w-full mt-2 rounded text-white p-1">
              Apply
            </button>
        </div>
    </div>

      <!--      MAKE -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('make')">{{route.params.make || "Any"}}</h3>
        <div v-if="modal.make" class="absolute border shadow left-56 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white">
            <h4 v-for="make in makes" :key="make" class="w-1/3 hover:bg-blue-500 hover:text-white rounded text-center" @click="setMakeSearch(make)">{{make}}</h4>
        </div>
    </div>
      <!--      PRICE -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize"  @click="updateModal('price')">{{ setPriceRange }}</h3>
        <div v-if="modal.price" class="absolute bordered shadow left-40 p-5 top-1 -m-1 bg-white">
            <input class="border p-1 rounded" type="number" placeholder="min" v-model="priceRange.min">
            <input class="border p-1 rounded" type="number" placeholder="max" v-model="priceRange.max">
            <button class="bg-blue-400 w-full mt-2 rounded text-white p-1" @click="setPriceSearch">Apply</button>
        </div>
    </div>
  </div>
</template>
