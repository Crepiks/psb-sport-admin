<template>
  <div class="tour">
    <div class="tour-title">Добавление тура</div>
    <div class="clearfix">
      <a-upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        list-type="picture-card"
        :file-list="fileList"
        @preview="handlePreview"
        @change="handleChange"
      >
        <div v-if="fileList.length < 8">
          <a-icon type="plus" />
          <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>
      <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
        <img alt="example" style="width: 100%" :src="previewImage" />
      </a-modal>
    </div>
    <div class="tour-info">
      <psbAppInput
        class="tour-input"
        v-model="tour.title"
        title="Название"
        placeholder="Введите название"
      />
      <psbAppTextarea
        class="tour-input"
        v-model="tour.description"
        title="Описание"
        placeholder="Введите описание"
      />
      <div class="tour-container">
        <psbAppInput
          class="tour-input tour-container-inner"
          v-model="tour.start"
          title="Начало"
          placeholder="Введите дату начала"
        />
        <psbAppInput
          class="tour-input tour-container-inner"
          v-model="tour.start"
          title="Конец"
          placeholder="Введите дату конца"
        />
      </div>
      <div class="tour-container">
        <psbAppInput
          class="tour-input tour-container-inner"
          v-model="tour.lon"
          title="Долгота"
          placeholder="Введите долготу"
        />
        <psbAppInput
          class="tour-input tour-container-inner"
          v-model="tour.lat"
          title="Широта"
          placeholder="Введите широту"
        />
      </div>
      <div class="tour-map-toggle" @click="$emit('toggle-map')">
        Указать на карте
      </div>
    </div>
    <psbAppButton @click="handleClick" :isLoading="isLoading"
      >Добавить</psbAppButton
    >
  </div>
</template>

<script>
import psbAppInput from "@/components/common/psb-app-input";
import psbAppTextarea from "@/components/common/psb-app-textarea";
import psbAppButton from "@/components/common/psb-app-button";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default {
  components: {
    psbAppInput,
    psbAppTextarea,
    psbAppButton,
  },
  data() {
    return {
      tour: {
        id: 0,
        tag: "",
        title: "",
        description: "",
        start: "",
        end: "",
        lon: "",
        lat: "",
        equipment: "",
        participants: [],
        rating: "",
        images: [],
      },
      previewVisible: false,
      previewImage: "",
      fileList: [],
      isLoading: false,
    };
  },
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
    handleClick() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.$emit("close-tour-add");
      }, 1500);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap");

.tour {
  max-height: 100%;
  overflow: auto;

  &-title {
    font-family: "PT Sans Caption", sans-serif !important;
    font-size: 28px;
    margin-bottom: 30px;
  }

  &-upload {
    margin-top: 30px;
  }

  &-info {
    margin-top: 30px;
  }

  &-input {
    margin-bottom: 20px;
  }

  &-input {
    &-title {
      font-size: 13px;
      color: $white;
      opacity: 0.8;
      margin-bottom: 10px;
    }
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  &-tag {
    border-radius: 50px;
    width: fit-content;
    border: 1px solid #b2b2b2;
    color: #b2b2b2;
    padding: 10px 20px;
    font-size: 15px;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: 200ms ease-in-out;
  }

  &-tag:hover {
    background-color: #b2b2b2;
    color: $black;
  }

  &-container {
    display: flex;
    justify-content: space-between;

    &-inner {
      width: 46%;
    }
  }

  &-map-toggle {
    background-color: $dark-white;
    padding: 5px 15px;
    box-sizing: border-box;
    font-size: 14px;
    margin-bottom: 20px;
    border-radius: 12px;
    width: fit-content;
    cursor: pointer;
  }
}
</style>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.ant-upload {
  background-color: transparent !important;
}

.ant-upload-text {
  color: $white !important;
}

.ant-upload-hint {
  color: $white !important;
  opacity: 0.7;
}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}

.ant-tooltip .ant-tooltip-placement-top .ant-tooltip-inner {
  opacity: 0 !important;
  color: transparent !important;
}

.ant-upload-list-item-error {
  border-color: #2f4d6a !important;
}

.ant-modal-content {
  background-color: #1f1f1f !important;
}
</style>
