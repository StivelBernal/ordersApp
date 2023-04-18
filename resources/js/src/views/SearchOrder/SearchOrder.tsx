import { FxInput2, hasValue } from 'fx-lib-react'
import React, { useContext, useState } from 'react'
import { Controller, FormProvider, useForm, useFormContext } from 'react-hook-form'
import Select from 'react-select'
import './SearchOrder.scss'
import backend from '../../api/backend'
import ClientContext from '../../context/clientContext'

export const documentTypes = [
  { label: 'Cédula de ciudadanía', value: 'CC' },
  { label: 'Cédula de extranjería', value: 'CE' },
  { label: 'Pasaporte', value: 'PA' }
]

interface OrderRequest {
  documentNumber: string,
  documentType: any,
  code: string
}

export const SearchOrder = () => {
  const methods = useForm<OrderRequest>({
    mode: 'all',
    defaultValues: {
      documentType: { label: 'Cédula de ciudadanía', value: 'CC' }
    }
  })

  return (
    <FormProvider {...methods}>
      <SearchOrderContext />
    </FormProvider>
  )
}

export const SearchOrderContext = () => {

  const { getValues, setValue, formState, formState: { errors }, control } = useFormContext()
  const [isSubmit, setIsSubmit] =  useState<boolean>(false)

  const { setDataOrder } = useContext(ClientContext)

  const [message, setMessage] =  useState<string>('')
  const setValues = (field: string, value: any) => {
    setValue(field, value, { shouldDirty: true, shouldValidate: true })
  }

  const saveForm = async () => {
    if (isSubmit) return
    const dataForm = getValues()

    setIsSubmit(true)
    setMessage('')
    
    const resp = await backend.get('/orders/searchOrder/', {
      params: {
        code: dataForm.code,
        document_number: dataForm.documentNumber,
        document_type: dataForm.documentType.value,
      }
    })

    setIsSubmit(true)

    if(hasValue(resp.data.customer)) {
      setDataOrder(resp.data)
    } else {
      setMessage('Pedido no encontrado')
      setIsSubmit(false)
      
      setTimeout(() => {
        setMessage('')
      }, 3000);
    }
  }

  return (
    <div className='SearchOrderComponent'>

      <div className='field-form m-t-20 m-b-20'>
        <div className='field-form-label'>Código de pedido<span className='required-field'>*</span></div>
   
        <Controller
              name='code'
              control={control}
              rules={{
                required: true,
                maxLength: 14,
                pattern: {
                  value: /[A-Z0-9]$/i,
                  message: 'invalid text'
                }
              }}
              render={({ field }) =>
                <FxInput2
                  type='text'
                  {...field}
                  value={getValues('code')}
                  onChange={(ev: any) => setValues('code', ev.target.value)}
                  label=''
                  errors={errors.code} name='code'
                />}
            />

      </div>


      <div className='field-form m-t-20 m-b-20'>
        <div className='field-form-label m-b-10'>¿Qué tipo de documento tienes?<span className='required-field'>*</span></div>
        <Select
          value={getValues('documentType')}
          classNamePrefix='fx'
          onChange={(ev: any) => setValues('documentType', ev)}
          isSearchable={false}
          options={documentTypes}
          placeholder='Selecciona el tipo de documento'
        />
      </div>

      <div className='field-form m-t-20 m-b-20'>
        <div className='field-form-label'>Número de documento<span className='required-field'>*</span></div>
   
        <Controller
              name='documentNumber'
              control={control}
              rules={{
                required: true,
                maxLength: 14,
                pattern: {
                  value: /[A-Z0-9]$/i,
                  message: 'invalid text'
                }
              }}
              render={({ field }) =>
                <FxInput2
                  type='text'
                  {...field}
                  value={getValues('documentNumber')}
                  onChange={(ev: any) => setValues('documentNumber', ev.target.value)}
                  label=''
                  errors={errors.documentNumber} name='documentNumber'
                />}
            />

      </div>

      <button className='bttn' disabled={!formState.isValid || isSubmit} onClick={() => saveForm()}>
        {
          isSubmit ? 'Consultando...' : 'Consultar'
        }
      </button>
      
      {
        message.length > 0 && <div className="message m-t-20">{message}</div>
      }

    </div>
  )
}
