<script setup>
definePageMeta({
  layout: "custom",
});

const { makes } = useCar();
const user = useSupabaseUser();
const errorMessage = ref("");

const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    features: "",
    description: "",
    image: "no-image-already",
  };
});

const onChangeInput = (data, name) => {
  info.value[name] = data;
};

const inputs = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Civic",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2019",
  },
    {
        id: 3,
        title: "Price *",
        name: "price",
        placeholder: "10000",
    },
  {
    id: 4,
    title: "Miles *",
    name: "miles",
    placeholder: "10000",
  },
  {
    id: 5,
    title: "City *",
    name: "city",
    placeholder: "Austin",
  },
  {
    id: 6,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "5",
  },
  {
    id: 7,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents",
  },
];

const isButtonDisabled = computed(() => {
    for (let key in info.value) {
        if (!info.value[key]) {
            return true;
        }
    }
    return false;
});

//submit create car post method
const handleSubmit = async () => {
    const body = {
        ...info.value,
        city: info.value.city.toLocaleLowerCase(),
        features: info.value.features.split(', '),
        numberOfSeats: parseInt(info.value.seats),
        miles: parseInt(info.value.miles),
        price: parseInt(info.value.price),
        year: parseInt(info.value.year),
        name: `${info.value.make} ${info.value.model}`,
        // listerId: user.value.id,
        listerId: "432",
        image: "no-image-already"
    };

    delete body.seats;

    try {
        const res = await $fetch("/api/car/listings", {
            method: "POST",
            body
        });
        navigateTo('/profile/listings');
    } catch (error) {
        errorMessage.value = error.statusMessage;
        console.log(error);
    }
}
</script>


<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      />
      <CarAdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />
      <CarAdTextarea
        title="Description *"
        name="description"
        placeholder=""
        @change-input="onChangeInput"
      />
      <CarAdImage @change-input="onChangeInput" />
        <div>
            <button class="bg-blue-400 text-white rounded py-2 px-7 mt-2" :disabled="isButtonDisabled" @click="handleSubmit">Submit</button>
            <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
        </div>
    </div>
  </div>
</template>