<template>
    <div>
        <a-button type="primary" @click='showModal'>弹窗</a-button>
        <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
            <a-button type="primary" @click='add'>新增</a-button>
            <a-button type="primary" @click="edit">编辑</a-button>
            <a-button type="primary" @click='view'>查看</a-button>
            <a-button type="primary" @click='clear'>清空</a-button>
            <a-form>
                <a-form-item label="Activity name" v-bind="validateInfos.name">
                    <a-input v-model:value="modelRef.name" />
                </a-form-item>
                <a-form-item label="Sub name" v-bind="validateInfos['sub.name']">
                    <a-input v-model:value="modelRef.sub.name" />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                    <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
                    <a-button style="margin-left: 10px" @click="reset">Reset</a-button>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { Form } from 'ant-design-vue';
const useForm = Form.useForm;
const modelRef = reactive({
    name: '',
    sub: {
        name: '',
    },
});
const { resetFields, validate, validateInfos } = useForm(
    modelRef,
    reactive({
        name: [
            {
                required: true,
                message: 'Please input name',
            },
        ],
        'sub.name': [
            {
                required: true,
                message: 'Please input sub name',
            },
        ],
    }),
);
const showModal = () => {
    open.value = true;
};

const add = () => {
    showModal();
    modelRef.name = '新增';
};
const edit = () => {
    showModal();
    modelRef.name = '编辑';
};
const view = () => {
    showModal();
    modelRef.name = '查看';
};
// 这就是一个空对象
const initData = {
    name: '',
    sub: {
        name: '',
    },
};
const clear = () => {
    showModal();
    Object.assign(modelRef, initData);
};
const open = ref<boolean>(false);

const handleOk = (e: MouseEvent) => {
    console.log(e);
    open.value = false;
};
const onSubmit = () => {
    validate()
        .then(res => {
            console.log(res, toRaw(modelRef));
        })
        .catch(err => {
            console.log('error', err);
        });
};
const reset = () => {
    resetFields();
};
</script>

<style scope></style>